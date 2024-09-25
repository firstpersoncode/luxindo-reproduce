import '@/styles/globals.css'

import { Frontend_Layout } from '@/modules/frontend'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const { asPath, locale } = useRouter()
  return (
    <Frontend_Layout key={locale} context={{ ...pageProps.appContext }}>
      <Component key={asPath} {...pageProps} />
    </Frontend_Layout>
  )
}
