import ContextProvider from './Providers'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const base = `${headers().get('x-forwarded-proto')}://${headers().get('host')}`;
  // const fullUrl = new URL(pathname(), base); // e.g., http://localhost:3000/some/path?a=1&b=2

  // console.log(fullUrl);

  return <ContextProvider context={{ isLoading: true }}>{children}</ContextProvider>
}
