import 'react-spring-bottom-sheet/dist/style.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'

import Header from './Header'
import Footer from './Footer'
import Providers, { IContext } from './providers'

export default function AppLayout({
  children,
  context
}: Readonly<{
  children: React.ReactNode;
  context: IContext
}>) {
  return (
    <Providers context={{ ...context }}>
      <Header />
      {children}
      <Footer />
    </Providers>
  )
}
