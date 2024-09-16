import { locales } from '@/libs/locales'
import configPromise from '@payload-config'
import { GetStaticPropsContext } from 'next'
import { getPayload } from 'payload'

export const getRootPaths = async () => {
  return {
    paths: locales.map((locale) => ({
      params: { locale, slugs: ['property'] },
    })),
    fallback: 'blocking',
  }
}

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

  return {
    paths: data.docs
      .filter(d => d.slug !== 'index')
      .map((d: any) => {
        return locales.map((locale) => ({
          params: { locale, slugs: d.slug.split('/') },
        }))
      })
      .flat(),
    fallback: 'blocking',
  }
}

export const getProps = (cb: any) => async (ctx: GetStaticPropsContext) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const slug =
    ctx.params?.slugs?.[0] === 'property'
      ? (ctx.params.slugs.slice(1) as string[]).join('/')
      : (ctx.params?.slugs as string[])?.join?.('/')

  const res = await payload.find({
    collection: 'properties', // required
    where: { slug: { equals: !!slug && slug !== '/' ? slug : 'index' } },
    // depth: 2,
    locale: (ctx.params?.locale || '') as 'en' | 'id' | 'fr' | 'all' | undefined,
    fallbackLocale: 'en',
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  let data = res.docs[0]

  if (!data) return { notFound: true }

  const metadata = {
    title: data?.title ?? '',
    description: data?.description ?? '',
  }

  if (data.template === 'default') {
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

  const _getProps = await cb(ctx)
  if (_getProps.notFound) return { notFound: true }

  _getProps.props.page = JSON.parse(
    JSON.stringify({ metadata, data, locale: ctx.params?.locale || '' }),
  )

  // _getProps.revalidate = 60

  return _getProps
}
