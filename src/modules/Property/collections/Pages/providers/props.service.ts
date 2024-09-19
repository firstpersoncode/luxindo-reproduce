import { locales } from '@/libs/locales'
import configPromise from '@/app/payload.config'
import { GetStaticPropsContext } from 'next'
import { getPayload } from 'payload'

export const getRootPaths = async () => {
  return {
    paths: locales.map((locale) => ({
      locale,
    })),
    fallback: 'blocking',
  }
}

export const getPaths = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'pages',
    page: 1,
    limit: 10,
    locale: 'en',
    fallbackLocale: 'en',
  })

  return {
    paths: data.docs
      .filter((d) => d.slug !== 'index')
      .map((d: any) => {
        return locales.map((locale) => ({
          params: { slugs: d.slug.split('/') },
          locale,
        }))
      })
      .flat(),
    fallback: 'blocking',
  }
}

const BLOCKS_HANDLERS: any[] = []

export const getProps = (cb: any) => async (ctx: GetStaticPropsContext) => {
  const _getProps = await cb(ctx)
  if (_getProps.notFound) return { notFound: true }

  const payload = await getPayload({
    config: configPromise,
  })

  const slug = (ctx.params?.slugs as string[])?.join?.('/')

  const res = await payload.find({
    collection: 'pages', // required
    where: { slug: { equals: slug && slug !== '/' ? slug : 'index' } },
    // depth: 2,
    locale: (ctx.locale || 'en') as 'en' | 'id' | 'fr' | 'all' | undefined,
    fallbackLocale: 'en',
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  let data = res.docs[0]

  if (!data) return { notFound: true }

  if (BLOCKS_HANDLERS.length) {
    for (const getBlockProps of BLOCKS_HANDLERS) {
      await getBlockProps(ctx, data, payload)
    }
  }

  const metadata = {
    title: data?.title ?? '',
    description: data?.description ?? '',
  }

  _getProps.props.context = JSON.parse(JSON.stringify({ metadata, data, locale: ctx.locale || '' }))

  return _getProps
}
