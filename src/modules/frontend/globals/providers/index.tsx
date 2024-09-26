import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { LOCALES } from './locales'
import axios from 'axios'

export interface IContext {
  isReady?: boolean
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
  isReady: false,
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

const hydrateProps = async (params: any): Promise<any> => {
  const qs =
    '?' +
    Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&')

  const { data: header } = await axios.get(
    process.env.NEXT_PUBLIC_APP_URL + `/api/globals/header/` + qs,
  )

  const { data: footer } = await axios.get(
    process.env.NEXT_PUBLIC_APP_URL + `/api/globals/footer/` + qs,
  )

  return { header, footer }
}

const useController = (_context: IContext) => {
  const [isReady, setIsReady] = useState(_context.isReady)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [isRouteChanging, setIsRouteChanging] = useState(_context.isRouteChanging)
  const [isScrolledToTop, setIsScrolledToTop] = useState(_context.isScrolledToTop)
  const [locale, setLocale] = useState(_context.locale)
  const [data, setData] = useState<any>(_context.data)

  const router = useRouter()
  const searchParams = useSearchParams()
  const [currency, setCurrency] = useState(searchParams?.get('currency') ?? _context.currency)

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 1000)
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!!isReady) {
      hydrateProps({ locale: _context.locale })
        .then((res) => {
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
          setData(res)
        })
        .catch(console.error)
    }
  }, [isReady, _context.locale])

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
    getLocale,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context, locales: LOCALES })

  const theme = extendTheme({
    colors: {
      primary: {
        50: "#f8f7f4",
        100: "#f2d8bd",
        500: '#C1A283',
      },
      brand: {
        primary: '#C1A283',
        secondary: '#333333',
        surface: "#f8f7f4",
        background: '#191919'
      },
    },
  })

  return (
    <ChakraProvider theme={theme} cssVarsRoot='body'>
      <Context.Provider value={value}>{children}</Context.Provider>
    </ChakraProvider>
  )
}

export const useContextProvider = () => useContext(Context)
