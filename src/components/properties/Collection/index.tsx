// import type { Metadata, ResolvingMetadata } from 'next'
// import localFont from 'next/font/local'
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
// })

import Providers, { IContext } from './providers'
import Components from './components'

export default function RootLayout({ context }: { context: IContext }) {
  // const data = await getContext(params)
  // if (!data?.id) {
  //   notFound()
  // }
  return (
    <Providers context={{ ...context }}>
      <Components />
    </Providers>
  )
}
