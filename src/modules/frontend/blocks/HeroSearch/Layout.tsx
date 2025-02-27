import { Box, Container, Text } from '@chakra-ui/react'
import SearchForm from './SearchForm'
import { useContextProvider } from './providers'
import BannerSlider from './BannerSlider'

const Layout: React.FC = () => {
  const { title, getLocale } = useContextProvider()
  return (
    <Box position="relative" h="100vh" width="100%" overflow="visible" background="brand.background">
      <BannerSlider />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="black"
        opacity={0.75}
      />

      <Container px={{ base: '24px', md: '48px' }}
        position="absolute"
        maxW="container.xl"
        left={0}
        right={0}
        bottom={'200px'}
        mx="auto"
      >
        <Text
          as="h1"
          color="white"
          fontSize={{ base: '48px', md: '72px' }}
          width={{ base: '100%', md: '80%' }}
          textTransform="uppercase"
          className='cormorant'
        >
          {title || getLocale('Your Gateway to Prestige Living')}
        </Text>
        <SearchForm />
      </Container>
    </Box>
  )
}

export default Layout
