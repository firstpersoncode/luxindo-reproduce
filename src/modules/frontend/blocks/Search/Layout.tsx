import { Box, Container } from '@chakra-ui/react'
import PropertyList from './PropertyList'
import SearchForm from './SearchForm'

const Layout: React.FC<any> = () => {
  return (
    <Box bg="white" mt="100px">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Box background="brand.secondary" padding="18px">
          <SearchForm />
        </Box>
        <PropertyList />
      </Container>
    </Box>
  )
}

export default Layout
