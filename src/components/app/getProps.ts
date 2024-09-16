import configPromise from '@payload-config'
import { GetStaticPropsContext } from 'next'
import { getPayload } from 'payload'

export const appProps = (cb: any) => async (ctx: GetStaticPropsContext) => {
  const payload = await getPayload({
    config: configPromise,
  })

  // const slug =
  //   ctx.params?.slugs?.[0] === 'property'
  //     ? ctx.params.slugs.slice(1).join('/')
  //     : ctx.params?.slugs?.join('/')

  // const res = await payload.find({
  //   collection: 'pages', // required
  //   where: { slug: { equals: slug && slug !== '/' ? slug : 'home' } },
  //   // depth: 2,
  //   locale: (ctx.params?.locale || 'en') as 'en' | 'id' | 'fr' | 'all' | undefined,
  //   fallbackLocale: 'en',
  //   // user: dummyUser,
  //   // overrideAccess: false,
  //   // showHiddenFields: true,
  // })

  // let data = res.docs[0]

  const getProps = await cb(ctx)
  if (getProps.notFound) return { notFound: true }

  getProps.props.app = JSON.parse(
    JSON.stringify({ data: { appUrl: process.env.NEXT_PUBLIC_APP_URL } }),
  )


  return getProps
}
