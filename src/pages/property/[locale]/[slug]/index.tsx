import VillaTitle from '@/components/pages/property/Title'
import VillaDetails from '@/components/pages/property/Details'
import PropertyDetails from '@/components/pages/property/PropertyDetails'
import Layout from "@/components/pages/property/layout"
import { getProperty } from "@/libs/payload/getProperty"
import Head from "next/head"

export default function Page({ property }: any) {
  return (
    <Layout>
      <VillaTitle
        title={property.title as string}
        location={[property.area_2, property.area_1].join(', ')}
      />
      <VillaDetails
        price={String(property.price) as string}
        currency={property.currency as string}
      />
      <PropertyDetails sku={property.sku as string} propertyType={property.type as string} />
      <Head>
        <title>{property.title}</title>
        <meta name="description" content={property.description} />
      </Head>
      {property ? <pre>{JSON.stringify(property, null, 2)}</pre> : 'Property not found'}
    </Layout>
  )
}

export async function getServerSideProps({ params }: any) {
  const property = await getProperty(params)

  return {
    props: { property },
  }
}
