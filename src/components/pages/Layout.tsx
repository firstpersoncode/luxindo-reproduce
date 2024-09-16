import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useMemo } from 'react'
import { useContextProvider } from './providers'

const themes: { [x: string]: any } = {
  default: dynamic(() => import('./Default')),
}

export default function Layout() {
  const { data, metadata } = useContextProvider()
  const View = useMemo(() => {
    const Component = themes[data?.template ?? 'default']
    return Component
  }, [data?.template])
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Head>
      <View />
    </>
  )
}
