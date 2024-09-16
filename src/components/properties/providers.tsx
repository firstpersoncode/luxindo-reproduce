import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export interface IContext {
  isLoading?: boolean
  locale: string
  data: any
  metadata: any
}

const context: IContext = {
  isLoading: true,
  locale: 'en',
  data: {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
  },
  metadata: {title: '', description: '', keywords: ''}
}

const Context = createContext(context)

const getDataByID = async (id: number, params: any): Promise<IContext['data']> => {
  const qs =
    '?' +
    Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&')
  const res = await axios.get(process.env.NEXT_PUBLIC_APP_URL + '/api/properties/' + id + qs)
  return res.data
}

const useController = (_context: IContext) => {
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [locale, setLocale] = useState(_context.locale)
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
      getDataByID(data.id, { locale })
        .then((res) => {
          setData(res)
        })
        .catch(console.error)
    }
  }, [isReady, data.id, locale])

  return {
    isLoading,
    locale,
    data,
    metadata
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
