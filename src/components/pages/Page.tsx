import dynamic from 'next/dynamic'

const pages: { [x: string]: any } = {
  default: dynamic(() => import('./Default')),
}

export default function Page({ ...props }: any) {
  const { page } = props
  const Page = pages[page?.data?.template ?? 'default']
  return <Page context={{ ...page }} />
}
