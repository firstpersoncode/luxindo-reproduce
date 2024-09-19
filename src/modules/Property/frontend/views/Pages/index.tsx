import Head from 'next/head'
import { PAGE_TEMPLATES } from './templates'
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
      <MapTemplate template={data.template} />
    </>
  )
}

function MapTemplate({ template }: any) {
  return useMemo(() => {
    const Template = PAGE_TEMPLATES[template] ?? PAGE_TEMPLATES['Default']
    return <Template />
  }, [template])
}
