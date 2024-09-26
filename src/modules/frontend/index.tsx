import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { VIEWS } from './views'
import AppLayout from './globals'

export const Frontend_App = ({ Component, pageProps }: AppProps) => {
  const { asPath, locale } = useRouter()
  return (
    <AppLayout key={locale} context={{ ...pageProps.appContext }}>
      <Component key={asPath} {...pageProps} />
    </AppLayout>
  )
}

export const Frontend_View = (props: any) => {
  return useMemo(() => {
    const Module = VIEWS[props.collectionName]
    return <Module {...props} />
  }, [props])
}
