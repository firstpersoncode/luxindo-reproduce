import { createContext, use, useContext, useEffect, useMemo, useState } from 'react'
import { search } from './search-properties.service'
import { LOCALES } from './locales'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  docs: any[]
  filter?: any
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
    price_start: 0,
    price_end: 10000000000,
  },
  locale: 'en',
  locales: {},
  handleSearch: () => {},
  setFilter: () => {},
  getLocale: () => '',
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const { replace, asPath } = useRouter()
  const [isReady, setIsReady] = useState(_context.isReady)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [docs, setDocs] = useState(_context.docs)
  const [filter, _setFilter] = useState(_context.filter)

  const searchParams = useSearchParams()

  const initialFilter = useMemo(() => {
    const _filter: any = {
      type: searchParams?.get('type') || '',
      ownership: searchParams?.get('ownership') || '',
      area_1: searchParams?.get('area_1') || '',
      area_2: searchParams?.get('area_2') || '',
      sku: searchParams?.get('sku') || '',
      price_start: searchParams?.get('price_start') || 0,
      price_end: searchParams?.get('price_end') || 10000000000,
    }

    Object.keys(_filter).forEach((key) => {
      if (
        _filter[key] === undefined ||
        _filter[key] === null ||
        _filter[key] === '' ||
        _filter[key] === '0' ||
        _filter[key] === 'any' ||
        _filter[key] === 'all'
      ) {
        delete _filter[key]
      }
    })

    return _filter
  }, [searchParams])

  useEffect(() => {
    _setFilter(initialFilter)
    ;(async () => {
      setIsLoading(true)
      const res = await search(initialFilter)
      if (res?.docs) setDocs(res.docs)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })()
  }, [initialFilter])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  const handleSearch = async () => {
    if (filter) {
      replace(
        {
          pathname: asPath.split('?')[0],
          query: {
            ...Object.fromEntries(new URLSearchParams(asPath.split('?')[1])),
            ...filter,
          },
        },
        undefined,
        { locale: _context.locale },
      )
    }
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
