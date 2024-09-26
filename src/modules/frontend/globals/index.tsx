import 'react-spring-bottom-sheet/dist/style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from './Header'
import Footer from './Footer'
import Providers, { IContext } from './providers'
import { Box } from '@chakra-ui/react'
import ContactButton from './ContactButton'

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
      <Box as="main" minH="80vh">
        {children}
      </Box>
      <Footer />
      <ContactButton />
    </Providers>
  )
}
