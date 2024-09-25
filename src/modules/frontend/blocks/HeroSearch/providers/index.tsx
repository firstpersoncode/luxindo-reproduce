import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { LOCALES } from './locales'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'
import { useRouter } from 'next/router'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  filter?: any
  images: any[]
  locale: string
  locales: { [x: string]: { [y: string]: string } }
  handleSearch: () => void
  setFilter: (params: any) => void
  getLocale: (key: string) => string
}

const context: IContext = {
  isReady: false,
  isLoading: true,
  filter: {
    type: '',
    ownership: '',
    area_1: '',
    area_2: '',
    sku: '',
    price_start: 0,
    price_end: 0,
  },
  images: [],
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
  const [filter, _setFilter] = useState(_context.filter)
  const [images, setImages] = useState(_context.images)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  const { asPath, push } = useRouter()

  const handleSearch = async () => {
    push(
      {
        pathname: '/properties',
        query: {
          ...Object.fromEntries(new URLSearchParams(asPath.split('?')[1])),
          ...filter,
        },
      },
      undefined,
      { locale: _context.locale },
    )
  }

  const setFilter = (newFilter: any) => {
    _setFilter((v: any) => ({ ...v, ...newFilter }))
  }

  const getLocale = useMemo(() => {
    return (key: string) =>
      _context.locales[key]?.[_context.locale as string] || _context.locales[key]?.['en'] || key
  }, [_context.locales, _context.locale])

  return {
    isReady,
    isLoading,
    filter,
    images,
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
