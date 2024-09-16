import { Property } from '@/payload-types'
import { createContext, useContext, useEffect, useState } from 'react'

export interface IContext {
  isLoading?: boolean
  locale: string
  data: any
}

const context: IContext = {
  isLoading: true,
  locale: "en",
  data: {
    id: 0,
    title: '',
    price: 0,
    currency: 'USD',
    description: '',
    images: [],
    plans: [],
    amenities: [],
    spaces: [],
    updatedAt: '',
    createdAt: '',
  },
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [locale, setLocale] = useState<string>(_context.locale)
  const [data, setData] = useState<Property>(_context.data)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return {
    isLoading,
    locale,
    data,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useContextProvider = () => useContext(Context)
