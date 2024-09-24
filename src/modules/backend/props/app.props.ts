import { GetStaticPropsContext } from 'next'

export const appProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      appContext: JSON.parse(
        JSON.stringify({
          data: { appUrl: process.env.NEXT_PUBLIC_APP_URL },
          locale: ctx.locale || 'en',
        }),
      ),
    },
    revalidate: 60,
  }
}
