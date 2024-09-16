import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useState } from 'react'

export interface IContext {
  isLoading?: boolean
  data: any
}

const context: IContext = {
  isLoading: true,
  data: {
    appUrl: "",
  },
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [data, setData] = useState<any>(_context.data)

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
    <ChakraProvider>
      <Context.Provider value={value}>{children}</Context.Provider>
    </ChakraProvider>
  )
}

export const useContextProvider = () => useContext(Context)
