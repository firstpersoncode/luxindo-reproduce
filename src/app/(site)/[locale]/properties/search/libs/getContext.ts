import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const getContext = async (searchParams: any) => {
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

  return {
    ...property,
    amenities: property.amenities
      ? property.amenities.map((amenity: any) => ({ ...amenity, value: amenity.value ?? '' }))
      : [],
    spaces: property.spaces
      ? property.spaces.map((space: any) => ({ ...space, value: space.value ?? '' }))
      : [],
    plans: property.plans
      ? property.plans.map((plan: any) => ({ ...plan, value: plan.value ?? '' }))
      : [],
    
  }
}
