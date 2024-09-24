import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { LOCALES } from './locales'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export interface IContext {
  isLoading?: boolean
  isRouteChanging?: boolean
  locale: string
  data: any
  currency: string
}

const context: IContext = {
  isLoading: true,
  isRouteChanging: false,
  locale: 'en',
  currency: "IDR",
  data: {
    appUrl: '',
  },
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [isRouteChanging, setIsRouteChanging] = useState(_context.isRouteChanging)
  const [locale, setLocale] = useState(_context.locale)
  const [data, setData] = useState<any>(_context.data)

  const router = useRouter()
  const searchParams = useSearchParams()
  const currency = searchParams?.get('currency') ?? _context.currency


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
    currency,
    data,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })
  return (
    <ThemeProvider theme={createTheme({})}>
      <ChakraProvider>
        <Context.Provider value={value}>{children}</Context.Provider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

export const useContextProvider = () => useContext(Context)
