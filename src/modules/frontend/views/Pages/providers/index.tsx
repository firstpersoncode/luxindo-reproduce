import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useContextProvider as useGlobalContextProvider } from '@/modules/frontend/globals/providers'
import axios from 'axios'
import { LOCALES } from '@/modules/locales'

export interface IContext {
  isLoading?: boolean
  data: any
  metadata: any
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
  metadata: { title: '', description: '', keywords: '' },
  locale: 'en',
  locales: {},
  isRouteChanging: false,
  getLocale: () => '',
}

const Context = createContext(context)

const hydrateProps = async (id: number, collection: string, params: any): Promise<any> => {
  const qs =
    '?' +
    Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&')
  const res = await axios.get(`/api/${collection}/${id}${qs}`)
  return res.data
}

const useController = (_context: IContext) => {
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(_context.isLoading)
  const [data, setData] = useState<IContext['data']>(_context.data)
  const [metadata, setMetaData] = useState<IContext['metadata']>(_context.metadata)

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 1000)
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!!isReady && !!data.id) {
      hydrateProps(data.id, 'pages', { locale: _context.locale })
        .then((res) => {
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
          setData(res)
        })
        .catch(console.error)
    }
  }, [isReady, data.id, _context.locale])

  const getLocale = useMemo(() => {
    return (key: string) =>
      _context.locales[key]?.[_context.locale as string] || _context.locales[key]?.['en'] || key
  }, [_context.locales, _context.locale])

  return {
    isLoading,
    data,
    metadata,
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
