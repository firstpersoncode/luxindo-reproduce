import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useContextProvider as useGlobalContextProvider } from '@/modules/Property/frontend/globals/providers'

const AmenitiesTitle: React.FC = () => {
  const { getLocale } = useGlobalContextProvider()
  return (
    <Heading
      as="h2"
      color="rgba(44, 62, 80, 1)"
      alignSelf="start"
      mt={{ base: '40px', md: '43px' }}
      fontSize="20px"
      fontWeight={600}
      lineHeight={1.1}
      fontFamily="Source Sans Pro, sans-serif"
    >
      {getLocale('Amenities')}
    </Heading>
  )
}

export default AmenitiesTitle
