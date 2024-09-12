'use client'

import React from 'react'
import { Box, Skeleton, Text } from '@chakra-ui/react'
import { useContextProvider } from '../../libs/providers'

interface PropertyDetailProps {
  label: string
  value: string
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ label, value }) => {
  const { isLoading } = useContextProvider()

  return (
    <Box fontWeight="400">
      {isLoading && (
        <Box>
          <Skeleton height="80px" width="100%" />
          <Skeleton height="80px" width="100%" />
        </Box>
      )}

      <Box visibility={isLoading ? 'hidden' : 'visible'}>
        <Text as="span">{label}: </Text>
        <Text as="span" fontWeight="700">
          {value}
        </Text>
      </Box>
    </Box>
  )
}

export default PropertyDetail
