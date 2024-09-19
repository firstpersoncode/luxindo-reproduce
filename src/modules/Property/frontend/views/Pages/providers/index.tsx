import { createContext, useContext, useEffect, useState } from 'react'
import { useContextProvider as useGlobalContextProvider } from '@/modules/Property/frontend/globals/providers'
import axios from 'axios'

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

const hydrateProps = async (id: number, collection: string, params: any): Promise<any> => {
  const qs =
    '?' +
    Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&')
  const res = await axios.get(process.env.NEXT_PUBLIC_APP_URL + `/api/${collection}/` + id + qs)
  return res.data
}


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
      hydrateProps(data.id, "pages", { locale })
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
