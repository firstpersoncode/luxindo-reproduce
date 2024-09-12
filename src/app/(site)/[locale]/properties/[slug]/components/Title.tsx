'use client'

import React from 'react'
import { Heading, Text, Skeleton, Box } from '@chakra-ui/react'
import { useContextProvider } from '../libs/providers'

const VillaListing: React.FC = () => {
  const {
    isLoading,
    data: { title, area_2, area_1 },
  } = useContextProvider()

  return (
    <Box as="header" textAlign="left" p="20px" maxW={{ base: '100%' }}>
      {isLoading && <Skeleton height="80px" width="100%" />}

      <Box visibility={isLoading ? 'hidden' : 'visible'}>
        <Heading as="h1" fontSize="24px" fontWeight="bold" mb="8px">
          {title}
        </Heading>
        <Text fontWeight="400">{[area_2, area_1].join(', ')}</Text>
      </Box>
    </Box>
  )
}

export default VillaListing
