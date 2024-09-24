import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useContextProvider } from '../../../providers'

const AmenitiesTitle: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <Heading
      as="h2"
      color="rgba(44, 62, 80, 1)"
      alignSelf="start"
      mt={{ base: '40px', md: '43px' }}
      fontSize="20px"
      fontWeight={600}
      lineHeight={1.1}
    >
      {getLocale('Amenities')}
    </Heading>
  )
}

export default AmenitiesTitle
