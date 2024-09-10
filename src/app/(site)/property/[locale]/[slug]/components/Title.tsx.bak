import React from 'react'
import { Typography, Skeleton, Box } from '@mui/material'

interface VillaListingProps {
  title: string
  location: string
  isLoading?: boolean
}

const VillaListing: React.FC<VillaListingProps> = ({ title, location, isLoading = false }) => {
  return (
    <Box
      component="header"
      sx={{
        textAlign: 'left',
        padding: '20px',
        '@media (max-width: 991px)': {
          maxWidth: '100%',
        },
      }}
    >
      {isLoading && <Skeleton variant="text" width="100%" height={80} />}

      <Box sx={{ contentVisibility: isLoading ? 'hidden' : 'visible' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
          }}
        >
          {location}
        </Typography>
      </Box>
    </Box>
  )
}

export default VillaListing
