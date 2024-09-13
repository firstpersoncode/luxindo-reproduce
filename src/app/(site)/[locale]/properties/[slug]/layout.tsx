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

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Property } from '@/payload-types'
import { getContext } from './libs/getContext'
import Providers from './libs/providers'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: any): Promise<{ title: Property['title']; description: Property['description'] }> {
  // // read route params
  // const id = params.id

  // // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  // return {
  //   title: product.title,
  //   openGraph: {
  //     images: ['/some-specific-page-image.jpg', ...previousImages],
  //   },
  // }

  const data = await getContext(params)

  if (!data?.id) {
    return {
      title: 'Not Found',
      description: '',
    }
  }

  return {
    title: data.title,
    description: data.description,
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { slug: string; locale: string }
}>) {
  const data = await getContext(params)
  if (!data?.id) {
    notFound()
  }
  return <Providers context={{ data }}>{children}</Providers>
}
