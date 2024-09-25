import { Box, Container, Heading } from '@chakra-ui/react'
import SearchForm from './SearchForm'
import { useContextProvider } from './providers'
import BannerSlider from './BannerSlider'

const Layout: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <Box position="relative" minH="100vh" width="100%" overflow="hidden" background="#000">
      <BannerSlider />

      <Container
        position="absolute"
        maxW="container.xl"
        left={0}
        right={0}
        bottom={'200px'}
        mx="auto"
      >
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '48px', md: '72px' }}
          width={{ base: '100%', md: '80%' }}
          textTransform="uppercase"
        >
          {getLocale('Your Gateway to Prestige Living')}
        </Heading>
        <SearchForm />
      </Container>
    </Box>
  )
}

export default Layout
