import configPromise from '@payload-config'
import { getPayload } from 'payload'

 const getProperty = async (searchParams: any) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const property = await payload.find({
    collection: 'properties', // required
    where: { slug: { equals: searchParams.slug } },
    // depth: 2,
    // locale: 'en',
    // fallbackLocale: false,
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  return property
}


export default async function Page({ params }: { params: { slug: string } }) {
  const property = await getProperty(params)

  return <>
    <pre>
      {JSON.stringify(property, null, 2)}
    </pre>
  </>
}
