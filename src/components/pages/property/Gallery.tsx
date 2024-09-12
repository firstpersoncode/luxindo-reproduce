import { Box } from '@chakra-ui/react';
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

interface GalleryProps {
  images: { url: string; alt: string }[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    images.length > 0 && (
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} border="1px solid #666" minH={100} borderRadius="lg">
            <Image src={image.url} alt={image.alt ?? `Image ${index}`} />
          </Box>
        ))}
      </Slider>
    )
  )
}

export default Gallery
