import React from 'react'
import { Box, Text, Skeleton, Container } from '@chakra-ui/react'
import { useContextProvider } from '../../providers'

const PropertyDetail: React.FC = () => {
  const {
    data: { sku, type: propertyType },
    isLoading,
    getLocale
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <Box
          display="flex"
          width="775px"
          maxWidth="100%"
          gap="20px"
          color="rgba(44, 62, 80, 1)"
          flexWrap="wrap"
          justifyContent="space-between"
          fontFamily="Source Sans Pro, sans-serif"
          fontSize="20px"
          fontWeight={400}
          lineHeight={1.6}
        >
          <Box>
            SKU:
            <Skeleton isLoaded={!isLoading} display="inline-block" ml={1}>
              <Text as="span" fontWeight={700}>
                {sku}
              </Text>
            </Skeleton>
          </Box>
          <Box>
            {getLocale("Property type")}:
            <Skeleton isLoaded={!isLoading} display="inline-block" ml={1}>
              <Text as="span" fontWeight={700}>
                {propertyType}
              </Text>
            </Skeleton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PropertyDetail
