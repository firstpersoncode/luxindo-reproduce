import configPromise from '@payload-config'
import { getPayload } from 'payload'

const getProperty = async (searchParams: any) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const res = await payload.find({
    collection: 'properties', // required
    where: { slug: { equals: searchParams.slug } },
    // depth: 2,
    locale: searchParams.locale,
    fallbackLocale: 'en',
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  const property = res.docs[0]

  return property
}

export default async function Page({ params }: { params: { slug: string } }) {
  const property = await getProperty(params)

  return <>{property ? <pre>{JSON.stringify(property, null, 2)}</pre> : 'Property not found'}</>
}
