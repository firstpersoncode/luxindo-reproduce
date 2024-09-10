'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface IContext {
  isLoading: boolean
}

const context: IContext = {
  isLoading: true,
}

const LayoutContext = createContext(context)

const useController = (_context: IContext) => {
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return {
    isLoading,
  }
}

export default function ContextProvider({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context: IContext }>) {
  const value = useController({ ...context, ..._context })
  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export const useLayoutContext = () => useContext(LayoutContext)
