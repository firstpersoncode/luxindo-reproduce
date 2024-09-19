import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { LOCALES } from '@/modules/Property/libs/locales'

export interface IContext {
  isLoading?: boolean
  locale: string
  locales: { [x: string]: { [y: string]: string } }
  data: any
  getLocale: (key: string) => string
}

const context: IContext = {
  isLoading: true,
  locale: 'en',
  locales: {},
  data: {
    appUrl: '',
  },
  getLocale: () => '',
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [locale, setLocale] = useState(_context.locale)
  const [locales, setLocales] = useState(_context.locales)
  const [data, setData] = useState<any>(_context.data)

  const getLocale = useMemo(() => {
    return (key: string) => locales[key]?.[locale as string] || locales[key]?.['en'] || key
  }, [locales, locale])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return {
    isLoading,
    locale,
    locales,
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
