import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { LOCALES } from './locales'

export interface IContext {
  isLoading?: boolean
  isRouteChanging?: boolean
  isScrolledToTop?: boolean
  locales: { [key: string]: { [key: string]: string } }
  locale: string
  data: any
  currency: string
  setLocale: (locale: string) => void
  setCurrency: (currency: string) => void
  getLocale: (key: string) => string
}

const context: IContext = {
  isLoading: true,
  isRouteChanging: false,
  isScrolledToTop: true,
  locale: 'en',
  locales: {},
  currency: 'IDR',
  data: {
    appUrl: '',
    header: {},
    footer: {},
  },
  setLocale: () => {},
  setCurrency: () => {},
  getLocale: () => '',
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [isRouteChanging, setIsRouteChanging] = useState(_context.isRouteChanging)
  const [isScrolledToTop, setIsScrolledToTop] = useState(_context.isScrolledToTop)
  const [locale, setLocale] = useState(_context.locale)
  const [data, setData] = useState<any>(_context.data)

  const router = useRouter()
  const searchParams = useSearchParams()
  const [currency, setCurrency] = useState(searchParams?.get('currency') ?? _context.currency)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      setIsRouteChanging(true)
    }
    const handleRouteChangeComplete = () => {
      setIsRouteChanging(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getLocale = useMemo(() => {
    return (key: string) =>
      _context.locales[key]?.[locale as string] || _context.locales[key]?.['en'] || key
  }, [_context.locales, locale])

  return {
    isLoading,
    isRouteChanging,
    isScrolledToTop,
    locale,
    locales: _context.locales,
    currency,
    data,
    setLocale,
    setCurrency,
    getLocale
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context, locales: LOCALES })
  return (
    <ChakraProvider>
      <Context.Provider value={value}>{children}</Context.Provider>
    </ChakraProvider>
  )
}

export const useContextProvider = () => useContext(Context)
