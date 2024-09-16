import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useMemo } from 'react'
import { useContextProvider } from './providers'

const pages: { [x: string]: any } = {
  default: dynamic(() => import('./Default')),
  collection: dynamic(() => import('./Collection')),
}

export default function Layout() {
  const { data, metadata } = useContextProvider()
  const Page = useMemo(() => {
    const Component = pages[data?.template ?? 'default']
    return Component
  }, [data?.template])
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Head>
      <Page context={{ data }} />
    </>
  )
}
