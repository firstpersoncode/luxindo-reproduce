import React, { useMemo } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import SearchForm from './SearchForm'
import { useContextProvider } from '../../../providers'
import Image from 'next/image'

const Hero: React.FC = () => {
  const { data } = useContextProvider()
  const heroImage = useMemo(() => data?.image, [data?.image])
  return (
    <Box position="relative" minH="80vh" width="100%" background="#000">
      {heroImage?.url && (
        <Box width="100%" height="100%" position="absolute" top={0} left={0}>
          <Image
            src={heroImage.url}
            alt={heroImage.alt ?? 'Home Hero'}
            fill
            style={{ objectFit: 'cover' }}
          />
          <Box position="absolute" width="100%" height="100%" bg="black" opacity={0.5} />
        </Box>
      )}
      <Container
        position="absolute"
        maxW="container.xl"
        left={0}
        right={0}
        bottom={'100px'}
        mx="auto"
      >
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '48px', md: '72px' }}
          width={{ base: '100%', md: '80%' }}
        >
          YOUR GATEWAY TO PRESTIGE LIVING
        </Heading>
        <SearchForm />
      </Container>
    </Box>
  )
}

export default Hero
