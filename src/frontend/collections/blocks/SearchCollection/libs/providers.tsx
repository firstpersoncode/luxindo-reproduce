import { createContext, useContext, useEffect, useState } from 'react'
import { searchCollection } from './searchCollection'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  locale?: string
  docs: any[]
  handleSearch: (params: any) => void
}

const context: IContext = {
  isReady: false,
  isLoading: true,
  locale: 'en',
  docs: [],
  handleSearch: () => {},
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isReady, setIsReady] = useState(_context.isReady)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [locale, setLocale] = useState(_context.locale)
  const [docs, setDocs] = useState(_context.docs)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  const handleSearch = async (params: any) => {
    setIsLoading(true)
    const collection = await searchCollection(params)
    if (collection?.docs) setDocs(collection.docs)
    setIsLoading(false)
  }

  return {
    isReady,
    isLoading,
    locale,
    docs,
    handleSearch,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useContextProvider = () => useContext(Context)
