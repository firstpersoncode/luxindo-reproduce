import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { search } from './search-properties.service'
import { LOCALES } from '@/modules/locales'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'
import { useRouter } from 'next/router'
import { MAX_PRICE, MIN_PRICE } from '@/modules/options'

export interface IContext {
  isReady?: boolean
  isLoading?: boolean
  docs: any[]
  filter?: any
  locale: string
  locales: { [x: string]: { [y: string]: string } }
  handleSearch: () => void
  handleNextPage: () => void
  setFilter: (params: any) => void
  getLocale: (key: string) => string
}

const context: IContext = {
  isReady: false,
  isLoading: true,
  docs: [],
  filter: {
    type: [],
    ownership: [],
    area_1: [],
    area_2: [],
    sku: '',
    price_start: MIN_PRICE,
    price_end: MAX_PRICE,
  },
  locale: 'en',
  locales: {},
  handleSearch: () => {},
  handleNextPage: () => {},
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

  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)

  const searchParams = useMemo(() => new URLSearchParams(asPath.split('?')[1]), [asPath])

  const initialFilter = useMemo(() => {
    if (!searchParams) return {}

    let _filter: any = {
      type: searchParams.get('type') || '',
      ownership: searchParams.get('ownership') || '',
      area_1: searchParams.get('area_1') || '',
      area_2: searchParams.get('area_2') || '',
      sku: searchParams.get('sku') || '',
      price_start: searchParams.get('price_start') || MIN_PRICE,
      price_end: searchParams.get('price_end') || MAX_PRICE,
    }

    Object.keys(_filter).forEach((key) => {
      if (!_filter[key] || _filter[key] === '0' || _filter[key] === 'any' || _filter[key] === 'all')
        _filter[key] = _context.filter[key]
      else if (key !== 'sku' && isNaN(_filter[key]))
        _filter[key] = _filter[key].includes('|') ? _filter[key].split('|') : [_filter[key]]
    })

    return _filter
  }, [searchParams])

  const fetchList = async (f: any, p: number) => {
    setIsLoading(true)
    const res = await search({ ...f, page: p })
    if (res?.docs) setDocs((arr) => (p > 1 ? [...arr, ...res.docs] : res.docs))
    if (!res?.docs?.length) setIsLastPage(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    const _filter = { ...initialFilter }
    _setFilter(_filter)
    fetchList(_filter, 1)
  }, [initialFilter])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  const handleSearch = async () => {
    setIsLastPage(false)
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
    setPage(1)
    replace(
      {
        pathname: asPath.split('?')[0],
        query: _filter,
      },
      undefined,
      { locale: _context.locale },
    )
  }

  const handleNextPage = useCallback(async () => {
    if (isLastPage) return
    const currPage = page + 1
    setPage(currPage)
    await fetchList(filter, currPage)
  }, [filter, page, isLastPage])

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
    handleNextPage,
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
