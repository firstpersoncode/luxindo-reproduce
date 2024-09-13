'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import { useContextProvider } from '../libs/providers'

const Map: React.FC = () => {
  const {
    isLoading,
    data: { lat_str, lng_str },
  } = useContextProvider()

  if (!parseInt(lat_str) || !parseInt(lng_str)) return null

  return (
    <Box textAlign="left" p="20px" maxW={{ base: '100%' }}>
      <iframe
        src={`https://maps.google.com/maps?q=${lat_str}, ${lng_str}&z=15&output=embed`}
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </Box>
  )
}

export default Map
