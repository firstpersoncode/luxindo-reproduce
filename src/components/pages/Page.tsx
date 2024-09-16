import dynamic from 'next/dynamic'
import Head from 'next/head'

const pages: { [x: string]: any } = {
  default: dynamic(() => import('./Default')),
}

export default function Page({ ...props }: any) {
  const { page } = props
  const Page = pages[page?.data?.template ?? 'default']
  return (
    <>
      <Head>
        <title>{page?.metadata?.title}</title>
        <meta name="description" content={page?.metadata?.description} />
      </Head>
      <Page context={{ ...page }} />
    </>
  )
}
