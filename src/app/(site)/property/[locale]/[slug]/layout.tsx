import { Metadata, ResolvingMetadata } from 'next'
import ContextProvider from './providers'
import { get } from 'http'
import { getProperty } from './getProperty'

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const property = await getProperty(params)
  return {
    title: property.title,
    description: property.description,
  }
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const base = `${headers().get('x-forwarded-proto')}://${headers().get('host')}`;
  // const fullUrl = new URL(pathname(), base); // e.g., http://localhost:3000/some/path?a=1&b=2

  // console.log(fullUrl);

  return <ContextProvider context={{ isLoading: true }}>{children}</ContextProvider>
}
