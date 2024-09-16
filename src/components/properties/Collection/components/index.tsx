'use client'

import React from 'react'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import SearchFilters from './SearchFilters'
import PropertyList from './PropertyList'
import PopularAreas from './PopularAreas'
import FAQSection from './FAQSection'
import FilterSection from './FIlterSection'

const PropertySearch: React.FC = () => {
  return (
    <Box bg="white" pt={{ base: '100px', md: '458px' }}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box
            borderRadius="23px"
            position="relative"
            minH="250px"
            overflow="hidden"
            color="white"
            textAlign="center"
          >
            <Box
              as="img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a257648eecfb03ec4e1d382a41ddf9c845e6525a7771fb74c130141381d2384a?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
              position="absolute"
              inset={0}
              h="100%"
              w="100%"
              objectFit="cover"
              objectPosition="center"
            />
            <Box position="relative" bg="rgba(29, 24, 22, 0.5)" p={{ base: 5, md: '67px 77px' }}>
              <Heading fontSize={{ base: '40px', md: '47px' }} fontWeight="700" lineHeight="1.2">
                Bali&lsquo;s property for sale
              </Heading>
              <Text fontSize="16px" fontWeight="400" lineHeight="24px" mt={2}>
                Discover your ideal Bali property: explore thousands of Bali property listings for
                sale! Search by property type (villas, ocean view, beachfront), budget, and desired
                features. Find your dream - off-plan properties for future investment or
                ready-move-in for immediate enjoyment. We simplify your Bali property search
              </Text>
            </Box>
          </Box>
          <SearchFilters />
          <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)" gap={10}>
            <GridItem>
              <FilterSection />
            </GridItem>
            <GridItem colSpan={3}>
              <PropertyList />
            </GridItem>
          </Grid>
          <PopularAreas />
          <FAQSection />
        </VStack>
      </Container>
    </Box>
  )
}

export default PropertySearch
