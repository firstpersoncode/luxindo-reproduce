import 'react-spring-bottom-sheet/dist/style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'

import Header from './Header'
import Footer from './Footer'
import Providers, { IContext } from './providers'
import { Box } from '@chakra-ui/react'
import ContactButton from './ContactButton'
import { Inter, Cormorant_Infant } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter', //css variables name
})

const cormorant = Cormorant_Infant({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant', //css variables name
})

const aerotis = localFont({ src: './fonts/Aerotis/Aerotis.ttf', variable: '--font-aerotis' })

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
      <Box
        className={`${inter.variable} ${cormorant.variable} ${aerotis.variable}`}
        as="main"
        minH="80vh"
      >
        {children}
      </Box>
      <Footer />
      <ContactButton />
    </Providers>
  )
}
