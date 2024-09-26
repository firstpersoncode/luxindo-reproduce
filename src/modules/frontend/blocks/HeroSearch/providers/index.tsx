import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { LOCALES } from './locales'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'
import { useRouter } from 'next/router'
import { search } from '../../SearchProperties/providers/search-properties.service'
import { MAX_PRICE, MIN_PRICE } from '@/options'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  filter?: any
  title: string
  cta: string
  images: any[]
  search_page_slug: string
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
    type: [],
    ownership: [],
    area_1: [],
    area_2: [],
    sku: '',
    price_start: MIN_PRICE,
    price_end: MAX_PRICE,
  },
  title: '',
  cta: '',
  images: [],
  search_page_slug: '/search',
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  const { asPath, push } = useRouter()

  const handleSearch = async () => {
    let _filter = { ...filter }
    Object.keys(_filter).forEach((key) => {
      if (
        !_filter[key] ||
        (Array.isArray(_filter[key]) && !_filter[key].length) ||
        _filter[key] === '0' ||
        _filter[key] === 'any' ||
        _filter[key] === 'all'
      )
        delete _filter[key]
      else if (Array.isArray(_filter[key])) _filter[key] = _filter[key].join('|')
    })

    push(
      {
        pathname: _context.search_page_slug,
        query: {
          ...Object.fromEntries(new URLSearchParams(asPath.split('?')[1])),
          ..._filter,
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
    images: _context.images,
    locale: _context.locale,
    locales: _context.locales,
    search_page_slug: _context.search_page_slug,
    title: _context.title,
    cta: _context.cta,
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
