import Head from 'next/head'
import { PAGE_TEMPLATES } from '@/modules/Property/view.modules'
import { useMemo } from 'react'
import Providers, { useContextProvider } from './providers'

export default function Page({ ...props }: any) {
  return (
    <Providers context={{ ...props.context }}>
      <Layout />
    </Providers>
  )
}

function Layout() {
  const { data, metadata } = useContextProvider()
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Head>
      <MapTemplate template={data.template ?? 'default'} />
    </>
  )
}

function MapTemplate({ template }: any) {
  return useMemo(() => {
    const Template = PAGE_TEMPLATES[template]
    return <Template />
  }, [template])
}
