'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Agent, Media, Property } from '@/payload-types'
import { createContext, useContext, useEffect, useState } from 'react'

export interface IContext {
  isLoading?: boolean
  data: any
}

const context: IContext = {
  isLoading: true,
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

const LayoutContext = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [data, setData] = useState<Property>(_context.data)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return {
    isLoading,
    data,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })
  return (
    <CacheProvider>
      <ChakraProvider>
        <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export const useContextProvider = () => useContext(LayoutContext)
