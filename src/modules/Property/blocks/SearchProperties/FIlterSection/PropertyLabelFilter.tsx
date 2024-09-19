import React from 'react'
import { VStack, Text, Checkbox } from '@chakra-ui/react'
import { useContextProvider } from '@/modules/Property/globals/providers'

const propertyLabels = [
  'Finest Collection Villa',
  'Off Plan',
  'Prime Location Villa',
  'Ready Now',
  'Ready Soon',
  'Selection of the month',
  'Sold',
  'Exclusive Properties',
]

const PropertyLabelFilter: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <VStack align="stretch" spacing={4} width="100%" mt={6}>
      <Text fontSize="16px" fontWeight="400">
        {getLocale('Property Label')}
      </Text>
      {propertyLabels.map((label) => (
        <Checkbox key={label} colorScheme="gray">
          {label}
        </Checkbox>
      ))}
    </VStack>
  )
}

export default PropertyLabelFilter
