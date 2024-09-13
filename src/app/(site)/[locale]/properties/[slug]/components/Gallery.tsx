'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import Slider from 'react-slick'
import { useContextProvider } from '../libs/providers'
import { Box } from '@chakra-ui/react'

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const {
    data: { images },
  } = useContextProvider()

  const hydratedImages = useMemo(() => {
    if (!images?.length) return []

    return images.map((image: any) => {
      const isAbsolutePath = image.file.url.startsWith('http')
      const url = isAbsolutePath ? image.file.url : `${process.env.APP_URL}${image.file.url}`
      return {
        file: { url, alt: image.file.alt },
      }
    })
  }, [images])

  return (
    hydratedImages.length > 0 && (
      <Slider {...settings}>
        {hydratedImages.map((image, index) => (
          <Box
            key={index}
            border="1px solid #666"
            minH={100}
            maxW="100%"
            borderRadius="lg"
            position="relative"
          >
            <Image
              src={image.file.url}
              alt={image.file.alt ?? `Image ${index}`}
              fill
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    )
  )
}

export default Gallery
