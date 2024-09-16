import { GetStaticPropsContext } from 'next'
import dynamic from 'next/dynamic'
import { getProps, getPaths } from '@/frontend/collections/Properties/libs/getProps'
import { appProps } from '@/frontend/globals/libs/getProps'
const Page = dynamic(() => import('@/frontend/collections/Properties/Page'))

export default function _Page({ ...props }) {
  return <Page {...props} />
}

export async function getStaticPaths() {
  return getPaths()
}

export const getStaticProps = appProps(
  getProps(async (ctx: GetStaticPropsContext) => ({ props: {} })),
)
