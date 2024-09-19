import '@/styles/globals.css'

import { Module_Layout } from '@/modules/frontend.modules'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const AppProvider = Module_Layout('Property')

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <AppProvider context={{ ...pageProps.appContext }}>
      <Component key={asPath} {...pageProps} />
    </AppProvider>
  )
}
