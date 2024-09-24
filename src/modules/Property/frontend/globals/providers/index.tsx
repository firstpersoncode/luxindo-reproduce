import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { LOCALES } from '@/modules/Property/libs/locales'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export interface IContext {
  isLoading?: boolean
  isRouteChanging?: boolean
  locale: string
  locales: { [x: string]: { [y: string]: string } }
  data: any
  currency: string
  getLocale: (key: string) => string
}

const context: IContext = {
  isLoading: true,
  isRouteChanging: false,
  locale: 'en',
  locales: {},
  currency: "IDR",
  data: {
    appUrl: '',
  },
  getLocale: () => '',
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [isRouteChanging, setIsRouteChanging] = useState(_context.isRouteChanging)
  const [locale, setLocale] = useState(_context.locale)
  const [locales, setLocales] = useState(_context.locales)
  const [data, setData] = useState<any>(_context.data)

  const router = useRouter()
  const searchParams = useSearchParams()
  const currency = searchParams?.get('currency') ?? _context.currency

  const getLocale = useMemo(() => {
    return (key: string) => locales[key]?.[locale as string] || locales[key]?.['en'] || key
  }, [locales, locale])

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

  return {
    isLoading,
    isRouteChanging,
    locale,
    locales,
    currency,
    data,
    getLocale,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context, locales: LOCALES })
  return (
    <ThemeProvider theme={createTheme({})}>
      <ChakraProvider>
        <Context.Provider value={value}>{children}</Context.Provider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

export const useContextProvider = () => useContext(Context)
