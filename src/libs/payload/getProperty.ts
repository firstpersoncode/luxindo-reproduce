import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const getProperty = async (searchParams: any) => {
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
