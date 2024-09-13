import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import PropertyCard from './PropertyCard'

interface Property {
  id: string
  title: string
  location: string
  price: string
  currency: string
  imageSrc: string
  image: { url: string }
}

interface PropertyGridProps {
  properties: Property[]
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </SimpleGrid>
  )
}

export default PropertyGrid
