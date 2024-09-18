import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useMemo } from 'react'
import { useContextProvider } from './libs/providers'

export default function Layout() {
  const { data, metadata } = useContextProvider()
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Head>
      <MapTheme {...data} />
    </>
  )
}

const themes: { [x: string]: any } = {
  default: dynamic(() => import('./Default')),
  collection: dynamic(() => import('./Collection')),
}

function MapTheme({ ...data }: any) {
  const View = useMemo(() => {
    const Theme = themes[data.template ?? 'default']
    return Theme
  }, [data.template])
  return <View />
}
