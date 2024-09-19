import Providers from './providers/providers'
import Layout from './Layout'

const SearchCollection: React.FC<any> = ({ ...props }) => {
  return (
    <Providers context={{ ...props }}>
      <Layout />
    </Providers>
  )
}

export default SearchCollection
