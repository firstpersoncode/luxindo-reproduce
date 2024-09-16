import { GetStaticPropsContext } from 'next'
import dynamic from 'next/dynamic'
import { getProps, getPaths } from '@/components/properties/getProps'
import { appProps } from '@/components/app/getProps'
const Page = dynamic(() => import('@/components/properties/Page'))

export default function _Page({ ...props }) {
  return <Page {...props} />
}

export async function getStaticPaths() {
  return getPaths()
}

export const getStaticProps = appProps(
  getProps(async (ctx: GetStaticPropsContext) => ({ props: {} })),
)
