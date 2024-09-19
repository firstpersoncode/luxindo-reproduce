import 'react-spring-bottom-sheet/dist/style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from './Header'
import Footer from './Footer'
import Providers, { IContext } from './providers'
import { Box, CircularProgress, VStack } from '@chakra-ui/react'

export default function AppLayout({
  children,
  context,
}: Readonly<{
  children: React.ReactNode
  context: IContext
}>) {
  return (
    <Providers context={{ ...context }}>
      <Header />
      <VStack as="main" minH="80vh">
        {children}
      </VStack>
      <Footer />
    </Providers>
  )
}

function LoadingLayout() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      backgroundColor="rgba(255,255,255,0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress isIndeterminate color="green.300" />
    </Box>
  )
}
