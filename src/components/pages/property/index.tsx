import Title from './Title'
import PriceInfo from './PriceInfo'
import PropertyInfo from './PropertyInfo'
import Layout from './Layout'
import Head from 'next/head'
import Gallery from './Gallery'

export default function Property({ property }: any) {
  return (
    <Layout>
      <Head>
        <title>{property.title}</title>
        <meta name="description" content={property.description} />
      </Head>
      <Title
        title={property.title as string}
        location={[property.area_2, property.area_1].join(', ')}
      />
      <PriceInfo price={String(property.price) as string} currency={property.currency as string} />
      <Gallery images={property.images} />
      <PropertyInfo sku={property.sku as string} propertyType={property.type as string} />

      {property ? <pre>{JSON.stringify(property, null, 2)}</pre> : 'Property not found'}
    </Layout>
  )
}
