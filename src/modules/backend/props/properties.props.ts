import { locales } from '@/modules/locales'
import configPromise from '@/app/payload.config'
import { GetStaticPropsContext } from 'next'
import { getPayload } from 'payload'

import { getProps as getSearchPropertiesBlockProps } from './block.search-properties.props'

export const getPaths = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'properties',
    page: 1,
    limit: 10,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return data.docs
    .filter((d) => d.slug !== 'index')
    .map((d: any) => {
      return locales.map((locale) => ({
        params: { slugs: d.slug.split('/') },
        locale,
      }))
    })
    .flat()
}

const BLOCKS_HANDLERS = [getSearchPropertiesBlockProps]

export const getProps = async (resp: any, ctx: GetStaticPropsContext) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const slug = (ctx.params?.slugs as string[])?.join?.('/')

  const res = await payload.find({
    collection: 'properties', // required
    where: { slug: { equals: !!slug && slug !== '/' ? slug : 'index' } },
    // depth: 2,
    locale: (ctx.locale || '') as 'en' | 'id' | 'fr' | 'all' | undefined,
    fallbackLocale: 'en',
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  let data = res.docs[0]

  if (!data) return { notFound: true }

  if (data.template === 'Default') {
    data = {
      ...data,
      amenities: data?.amenities
        ? data.amenities.map((amenity: any) => ({ ...amenity, value: amenity.value ?? '' }))
        : [],
      spaces: data?.spaces
        ? data.spaces.map((space: any) => ({ ...space, value: space.value ?? '' }))
        : [],
      plans: data?.plans
        ? data.plans.map((plan: any) => ({ ...plan, value: plan.value ?? '' }))
        : [],
      images: data?.images ? data.images.filter((image: any) => !!image.file) : [],
      related_properties: data?.related_properties ? data.related_properties : [],
      // relatedProperties,
    }
  }

  for (const getBlockProps of BLOCKS_HANDLERS) {
    await getBlockProps(ctx, data, payload)
  }

  const metadata = {
    title: data?.title ?? '',
    description: data?.description ?? '',
  }

  resp.props.context = JSON.parse(JSON.stringify({ metadata, data }))
  resp.props.collectionName = 'Properties'

  return resp
}
