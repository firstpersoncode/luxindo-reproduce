'use client'

import React from 'react'
import { Box, Skeleton } from '@mui/material'
import PropertyDetail from './PropertyDetail'

interface PropertyDetailsProps {
  sku: string
  propertyType: string
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ sku, propertyType }) => {
  
  const details = [
    { label: 'SKU', value: sku },
    { label: 'Property type', value: propertyType },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '28px',
        width: '775px',
        maxWidth: '100%',
        gap: '20px',
        color: 'rgba(44, 62, 80, 1)',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        font: "400 20px/1.6 'Source Sans Pro', sans-serif",
      }}
    >
      {details.map((detail, index) =>
        <PropertyDetail key={index} label={detail.label} value={detail.value} />
      )}
    </Box>
  )
}

export default PropertyDetails
