import { GetStaticPropsContext } from 'next'
import configPromise from '@/app/payload.config'
import { getPayload } from 'payload'

export const appProps = async (ctx: GetStaticPropsContext) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const header = await payload.findGlobal({
    slug: 'header', // required
    locale: (ctx.locale || 'en') as 'en' | 'id' | 'fr' | 'all' | undefined,
    fallbackLocale: 'en',
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  const footer = await payload.findGlobal({
    slug: 'footer', // required
    locale: (ctx.locale || 'en') as 'en' | 'id' | 'fr' | 'all' | undefined,
    fallbackLocale: 'en',
    // user: dummyUser,
    // overrideAccess: false,
    // showHiddenFields: true,
  })

  return {
    props: {
      appContext: JSON.parse(
        JSON.stringify({
          data: { appUrl: process.env.NEXT_PUBLIC_APP_URL, header, footer },
          locale: ctx.locale || 'en',
        }),
      ),
    },
    revalidate: 60,
  }
}
