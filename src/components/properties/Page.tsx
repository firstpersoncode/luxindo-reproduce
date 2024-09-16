
import Layout from './Layout'
import Providers from './providers'

export default function Page({ ...props }: any) {
  return (
    <Providers context={{ ...props.page }}>
      <Layout />
    </Providers>
  )
}
