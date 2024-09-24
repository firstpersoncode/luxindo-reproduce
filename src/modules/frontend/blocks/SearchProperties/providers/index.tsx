import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { search, SearchParams } from './search-properties.service'
import { LOCALES } from './locales'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  docs: any[]
  filter?: SearchParams
  locale: string
  locales: { [x: string]: { [y: string]: string } }
  handleSearch: () => void
  setFilter: (params: any) => void
  getLocale: (key: string) => string
}

const context: IContext = {
  isReady: false,
  isLoading: true,
  docs: [],
  filter: {
    type: '',
    ownership: '',
    area_1: '',
    area_2: '',
    sku: '',
  },
  locale: 'en',
  locales: {},
  handleSearch: () => {},
  setFilter: () => {},
  getLocale: () => '',
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

  const getLocale = useMemo(() => {
    return (key: string) =>
      _context.locales[key]?.[_context.locale as string] || _context.locales[key]?.['en'] || key
  }, [_context.locales, _context.locale])

  return {
    isReady,
    isLoading,
    docs,
    filter,
    locale: _context.locale,
    locales: _context.locales,
    handleSearch,
    setFilter,
    getLocale,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const { locale } = useGlobalContextProvider()
  const value = useController({ ...context, ..._context, locale, locales: LOCALES })

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useContextProvider = () => useContext(Context)
