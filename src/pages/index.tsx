import { GetStaticPropsContext } from 'next'
import dynamic from 'next/dynamic'
import { getProps } from '@/components/pages/getProps'
import { appProps } from '@/components/app/getProps'
const Page = dynamic(() => import('@/components/pages/Page'))

export default function _Page({ ...props }) {
  return <Page {...props} />
}

export const getStaticProps = appProps(
  getProps(async (ctx: GetStaticPropsContext) => ({ props: {} })),
)
