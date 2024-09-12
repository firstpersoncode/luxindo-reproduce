import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <ChakraProvider>
      <Layout>
        <Component key={asPath} {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
