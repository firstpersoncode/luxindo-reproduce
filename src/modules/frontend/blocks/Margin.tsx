import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const Margin: React.FC<{
  background_color: string
  margin_desktop: number
  margin_mobile: number
}> = ({ background_color, margin_desktop, margin_mobile }) => {
  return (
    <Box
      backgroundColor={background_color || 'transparent'}
      height={{ base: `${margin_mobile || 0}px`, lg: `${margin_desktop || 0}px` }}
    />
  )
}

export default Margin
