import React from 'react'
import { VStack, Text, Checkbox } from '@chakra-ui/react'
import { useContextProvider } from '@/modules/Property/globals/providers'

const propertyFeatures = [
  'Ocean View',
  'Rice Field View',
  'Good Investment',
  'Family Villa',
  'Pet Friendly Villa',
  'Premium Villa',
  'River View',
]

const PropertyFeatureFilter: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <VStack align="stretch" spacing={4} width="100%" mt={6}>
      <Text fontSize="16px" fontWeight="400">
        {getLocale('Property Feature')}
      </Text>
      {propertyFeatures.map((feature) => (
        <Checkbox key={feature} colorScheme="gray">
          {feature}
        </Checkbox>
      ))}
    </VStack>
  )
}

export default PropertyFeatureFilter
