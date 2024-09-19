import React from 'react'
import { VStack } from '@chakra-ui/react'
import ArchitectureCard from './Card'
import { useContextProvider } from '../../../providers'

const ArchitectureList: React.FC = () => {
  const {
    data: { amenities },
    isLoading,
  } = useContextProvider()

  return (
    <VStack spacing={4} align="stretch">
      {amenities?.map((amenity: any, index: number) => (
        <ArchitectureCard
          key={index}
          title={amenity.title}
          value={amenity.value}
          isLoading={isLoading}
        />
      ))}
    </VStack>
  )
}

export default ArchitectureList
