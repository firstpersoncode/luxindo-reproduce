import Providers from './providers'
import Layout from './Layout'

const HeroSearch: React.FC<any> = ({ ...props }) => {
  return (
    <Providers context={{ ...props }}>
      <Layout />
    </Providers>
  )
}

export default HeroSearch
