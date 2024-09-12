'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import { useContextProvider } from '../libs/providers'

const Map: React.FC = () => {
  const {
    isLoading,
    data: { lat, lng },
  } = useContextProvider()

  return (
    <Box as="header" textAlign="left" p="20px" maxW={{ base: '100%' }}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.12590569852!2d${lat}!3d${lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2474b8932dadd%3A0x5cddbee95fce3c5f!2sKMP%20kost%20mega%20pengalasan!5e0!3m2!1sen!2sid!4v1726155446189!5m2!1sen!2sid`}
        width="600"
        height="450"
        loading="lazy"
      />
    </Box>
  )
}

export default Map
