import React from 'react'
import { Box, Heading, Text, Skeleton, Container } from '@chakra-ui/react'
import { useContextProvider } from '../../providers'

const PropertyTitle: React.FC = () => {
  const {
    data: { title, area_1, area_2 },
    isLoading,
  } = useContextProvider()
  return (
    <Box bg="white" as="header">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Box borderBottom="1px solid" borderColor="gray.300" py={3}>
          <Skeleton isLoaded={!isLoading}>
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="600"
              lineHeight={{ base: '1.2', md: '1.3' }}
              color="gray.800"
            >
              {title}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} mt={2}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="400" color="gray.600">
              {[area_2, area_1].filter(Boolean).join(', ')}
            </Text>
          </Skeleton>
        </Box>
      </Container>
    </Box>
  )
}

export default PropertyTitle
