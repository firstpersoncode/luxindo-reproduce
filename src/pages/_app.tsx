import { Module_layout } from '@/modules/view.modules'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const AppLayout = Module_layout('Property')

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <AppLayout context={{ ...pageProps.appContext }}>
      <Component key={asPath} {...pageProps} />
    </AppLayout>
  )
}
