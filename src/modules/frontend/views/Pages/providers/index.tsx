import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'
import { LOCALES } from '@/modules/locales'

export interface IContext {
  isLoading?: boolean
  data: any
  locale: string
  locales: { [x: string]: { [y: string]: string } }
  isRouteChanging?: boolean
  getLocale: (key: string) => string
}

const context: IContext = {
  isLoading: true,
  data: {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
  },
  locale: 'en',
  locales: {},
  isRouteChanging: false,
  getLocale: () => '',
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const getLocale = useMemo(() => {
    return (key: string) =>
      _context.locales[key]?.[_context.locale as string] || _context.locales[key]?.['en'] || key
  }, [_context.locales, _context.locale])

  return {
    isLoading,
    data: _context.data,
    locale: _context.locale,
    locales: _context.locales,
    isRouteChanging: _context.isRouteChanging,
    getLocale
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const { locale, isRouteChanging } = useGlobalContextProvider()
  const value = useController({ ...context, ..._context, locale, locales: LOCALES, isRouteChanging })
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useContextProvider = () => useContext(Context)
