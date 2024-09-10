"use client"

import React from 'react'
import { Typography, Box, Button, Skeleton } from '@mui/material'
import ShareButtons from './ShareButtons'
import { useLayoutContext } from '../../providers'

interface PriceDisplayProps {
  price: string
  currency: string
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, currency }) => {
  const { isLoading } = useLayoutContext()
  return (
    <Box
      className="price-display"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '30px 0 0 13px',
        maxWidth: '100%',
        width: '858px',
      }}
    >
      <Box
        className="price-container"
        sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1, margin: 'auto 0' }}
      >
        {isLoading ? (
          <Skeleton variant="text" width={200} height={60} />
        ) : (
          <>
            <Typography
              variant="h1"
              className="price"
              sx={{
                color: 'rgba(52, 47, 44, 1)',
                fontSize: '46px',
                fontWeight: 600,
                '@media (max-width: 991px)': { fontSize: '40px' },
              }}
            >
                {new Intl.NumberFormat().format(Number(price))}
            </Typography>
            <Typography
              variant="body2"
              className="currency"
              sx={{
                color: 'rgba(44, 62, 80, 1)',
                fontSize: '15px',
                fontWeight: 400,
                alignSelf: 'start',
                marginTop: '8px',
              }}
            >
              /{currency}
            </Typography>
          </>
        )}
      </Box>
      <Box
        className="actions-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '15px',
          color: 'rgba(44, 62, 80, 1)',
          lineHeight: 1.6,
        }}
      >
        <ShareButtons isLoading={isLoading} />
        <Button
          variant="outlined"
          startIcon={
            isLoading ? (
              <Skeleton variant="circular" width={14} height={14} />
            ) : (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aa858373064b1cdf1dd578ff5eae01c115e97bc193cf3aca4e2b4b51af14a2d?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
                alt=""
                width={14}
                height={14}
              />
            )
          }
          sx={{
            alignSelf: 'flex-end',
            marginTop: '15px',
            gap: '11px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            textTransform: 'uppercase',
            padding: '13px 17px',
            border: '2px solid rgba(44, 62, 80, 1)',
            '@media (max-width: 991px)': { whiteSpace: 'initial' },
          }}
        >
          {isLoading ? <Skeleton variant="text" width={40} /> : 'Print'}
        </Button>
      </Box>
    </Box>
  )
}

export default PriceDisplay
