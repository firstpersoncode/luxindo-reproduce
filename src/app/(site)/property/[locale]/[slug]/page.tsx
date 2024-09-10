// import VillaTitle from './components/Title'
// import VillaDetails from './components/Details.bak/index.tsx.bak'
// import PropertyDetails from './components/PropertyDetails.bak/index.tsx.bak'
import { getProperty } from './getProperty'

export default async function Page({ params }: { params: { slug: string } }) {
  const property = await getProperty(params)

  return (
    <>
      {/* <VillaTitle
        title={property.title as string}
        location={[property.area_2, property.area_1].join(', ')}
      />
      <VillaDetails
        price={String(property.price) as string}
        currency={property.currency as string}
      />
      <PropertyDetails sku={property.sku as string} propertyType={property.type as string} /> */}
      {property ? <pre>{JSON.stringify(property, null, 2)}</pre> : 'Property not found'}
    </>
  )
}
