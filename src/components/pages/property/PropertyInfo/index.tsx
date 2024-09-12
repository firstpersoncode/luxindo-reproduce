import React from 'react'
import { Box } from '@chakra-ui/react'
import PropertyDetail from './PropertyDetail'

interface PropertyInfosProps {
  sku: string
  propertyType: string
}

const PropertyInfos: React.FC<PropertyInfosProps> = ({ sku, propertyType }) => {
  const details = [
    { label: 'SKU', value: sku },
    { label: 'Property type', value: propertyType },
  ]

  return (
    <Box
      display="flex"
      mt="28px"
      w="775px"
      maxW="100%"
      gap="20px"
      color="rgba(44, 62, 80, 1)"
      flexWrap="wrap"
      justifyContent="space-between"
      fontFamily="'Source Sans Pro', sans-serif"
      fontWeight="400"
      fontSize="20px"
      lineHeight="1.6"
    >
      {details.map((detail, index) => (
        <PropertyDetail key={index} label={detail.label} value={detail.value} />
      ))}
    </Box>
  )
}

export default PropertyInfos
