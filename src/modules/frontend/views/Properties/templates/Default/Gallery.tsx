import Image from 'next/image'
import React, { useMemo } from 'react'
import Slider from 'react-slick'
import { useContextProvider } from '../../providers'
import { Box, Container } from '@chakra-ui/react'

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
      const url = image.file.url
      return {
        file: { url, alt: image.file.alt },
      }
    })
  }, [images])

  return (
    hydratedImages.length > 0 && (
      <Box bg="white">
        <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
          <Slider {...settings}>
            {hydratedImages.map((image: any, index: number) => (
              <Box
                key={index}
                border="1px solid #666"
                maxW="100%"
                pb="56.25%"
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
        </Container>
      </Box>
    )
  )
}

export default Gallery
