import Providers, { IContext } from './providers'
import Components from './components'

export default function RootLayout({ context }: { context: IContext }) {
  return (
    <Providers context={{ ...context }}>
      <Components />
    </Providers>
  )
}
