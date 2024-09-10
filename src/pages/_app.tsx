import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/libs/theme'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component key={asPath} {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
