import { createContext, useContext, useEffect, useState } from 'react'
import { hydrateProps } from './hydrate-props.service'
import { useContextProvider as useGlobalContextProvider } from '@/modules/Property/globals/providers'

export interface IContext {
  isLoading?: boolean
  data: any
  metadata: any
}

const context: IContext = {
  isLoading: true,
  data: {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
  },
  metadata: { title: '', description: '', keywords: '' },
}

const Context = createContext(context)

const useController = (_context: IContext) => {
  const { locale } = useGlobalContextProvider()
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [data, setData] = useState<IContext['data']>(_context.data)
  const [metadata, setMetaData] = useState<IContext['metadata']>(_context.metadata)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!!isReady && !!data.id) {
      hydrateProps(data.id, { locale })
        .then((res) => {
          setData(res)
        })
        .catch(console.error)
    }
  }, [isReady, data.id, locale])

  return {
    isLoading,
    data,
    metadata,
  }
}

export default function Providers({
  children,
  context: _context,
}: Readonly<{ children: React.ReactNode; context?: IContext }>) {
  const value = useController({ ...context, ..._context })
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useContextProvider = () => useContext(Context)
