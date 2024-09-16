import { locales } from '@/libs/locales'
import configPromise from '@payload-config'
import { GetStaticPropsContext } from 'next'
import { getPayload } from 'payload'

export const getPaths = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    page: 1,
    limit: 1000,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return {
    paths: data.docs
      .map((d: any) => {
        return locales.map((locale) => ({
          params: { locale, slugs: d.slug === 'index' ? [] : d.slug.split('/') },
        }))
      })
      .flat(),
    fallback: true,
  }
}

export const getProps = (cb: any) => async (ctx: GetStaticPropsContext) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const slug = (ctx.params?.slugs as string[])?.join?.('/')

  const res = await payload.find({
    collection: 'pages', // required
    where: { slug: { equals: slug && slug !== '/' ? slug : 'index' } },
    // depth: 2,
    locale: (ctx.params?.locale || 'en') as 'en' | 'id' | 'fr' | 'all' | undefined,
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

  const _getProps = await cb(ctx)
  if (_getProps.notFound) return { notFound: true }

  _getProps.props.page = JSON.parse(
    JSON.stringify({ metadata, data, locale: ctx.params?.locale || '' }),
  )

  return _getProps
}
