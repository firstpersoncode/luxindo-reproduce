import { GetStaticPropsContext } from 'next'
import dynamic from 'next/dynamic'
import { getProps } from '@/frontend/collections/Pages/libs/getProps'
import { appProps } from '@/frontend/globals/libs/getProps'
const Page = dynamic(() => import('@/frontend/collections/Pages/Page'))

export default function _Page({ ...props }) {
  return <Page {...props} />
}

export const getStaticProps = appProps(
  getProps(async (ctx: GetStaticPropsContext) => ({ props: {} })),
)
