'use client'

import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import { useLayoutContext } from '../providers'

interface PropertyDetailProps {
  label: string
  value: string
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ label, value }) => {
  const { isLoading } = useLayoutContext()

  return (
    <Box sx={{ fontWeight: 400 }}>
      {isLoading && (
        <Box>
          <Skeleton variant="text" width="100%" height={80} />
          <Skeleton variant="text" width="100%" height={80} />
        </Box>
      )}

      <Box sx={{ contentVisibility: isLoading ? 'hidden' : 'visible' }}>
        <Typography component="span">{label}: </Typography>
        <Typography component="span" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
      </Box>
    </Box>
  )
}
export default PropertyDetail
