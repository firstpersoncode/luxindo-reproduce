import { createContext, useContext, useEffect, useState } from 'react'
import { search, SearchParams } from './search-properties.service'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  docs: any[]
  filter?: SearchParams
  handleSearch: () => void
  setFilter: (params: any) => void
}

const context: IContext = {
  isReady: false,
  isLoading: true,
  docs: [],
  filter: {
    type: '',
    ownership: '',
    area_2: '',
    area_1: '',
    sku: '',
  },
  handleSearch: () => {},
  setFilter: () => {},
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isReady, setIsReady] = useState(_context.isReady)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [docs, setDocs] = useState(_context.docs)
  const [filter, _setFilter] = useState(_context.filter)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  const handleSearch = async () => {
    setIsLoading(true)
    if (filter) {
      const res = await search(filter)
      if (res?.docs) setDocs(res.docs)
    }
    setIsLoading(false)
  }

  const setFilter = (newFilter: SearchParams) => {
    _setFilter((v) => ({ ...v, ...newFilter }))
  }

  return {
    isReady,
    isLoading,
    docs,
    filter,
    handleSearch,
    setFilter,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useContextProvider = () => useContext(Context)
