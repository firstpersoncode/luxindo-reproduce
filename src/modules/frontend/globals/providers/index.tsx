import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export interface IContext {
  isLoading?: boolean
  isRouteChanging?: boolean
  isScrolledToTop?: boolean
  locale: string
  data: any
  currency: string
  setLocale: (locale: string) => void
  setCurrency: (currency: string) => void
}

const context: IContext = {
  isLoading: true,
  isRouteChanging: false,
  isScrolledToTop: true,
  locale: 'en',
  currency: 'IDR',
  data: {
    appUrl: '',
    header: {},
    footer: {},
  },
  setLocale: () => {},
  setCurrency: () => {},
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

  return {
    isLoading,
    isRouteChanging,
    isScrolledToTop,
    locale,
    currency,
    data,
    setLocale,
    setCurrency,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })
  return (
    <ChakraProvider>
      <Context.Provider value={value}>{children}</Context.Provider>
    </ChakraProvider>
  )
}

export const useContextProvider = () => useContext(Context)
