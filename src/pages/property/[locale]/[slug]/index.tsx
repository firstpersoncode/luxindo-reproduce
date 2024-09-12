import Layout from '@/components/pages/property/Layout'
import { getProperty } from '@/libs/payload/getProperty'
import Property from '@/components/pages/property'

export default function Page({ property }: any) {
  return (
    <Layout>
      <Property property={property} />
    </Layout>
  )
}

export async function getServerSideProps({ params }: any) {
  const property = await getProperty(params)

  console.log(property)

  return {
    props: { property },
  }
}
