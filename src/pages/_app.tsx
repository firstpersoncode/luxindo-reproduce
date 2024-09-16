import AppLayout from '@/components/app'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <AppLayout context={pageProps.app}>
      <Component key={asPath} {...pageProps} />
    </AppLayout>
  )
}
