import React from 'react'
import { VStack, Text, Checkbox } from '@chakra-ui/react'
import { useContextProvider } from '@/modules/Property/globals/providers'

const PropertyStatusFilter: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <VStack align="stretch" spacing={4} width="100%" mt={6}>
      <Text fontSize="16px" fontWeight="400">
        {getLocale('Property Status')}
      </Text>
      <Checkbox colorScheme="gray">Freehold</Checkbox>
      <Checkbox colorScheme="gray">Leasehold</Checkbox>
    </VStack>
  )
}

export default PropertyStatusFilter
