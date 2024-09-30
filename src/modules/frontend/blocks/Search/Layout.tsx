import { Box, Container } from '@chakra-ui/react'
import PropertyList from './PropertyList'
import Form from "./Form"

const Layout: React.FC<any> = () => {
  return (
    <Box bg="brand.surface">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Form />
        <PropertyList />
      </Container>
    </Box>
  )
}

export default Layout
