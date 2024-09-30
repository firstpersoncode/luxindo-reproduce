import Providers from './providers'
import Layout from './Layout'

const Search: React.FC<any> = ({ ...props }) => {
  return (
    <Providers context={{ ...props }}>
      <Layout />
    </Providers>
  )
}

export default Search
