import React, { useMemo } from 'react'
import { Box, Container } from '@chakra-ui/react'
import PropertyGrid from './PropertyGrid'
import { useContextProvider } from '../../../providers'

const PropertyListing: React.FC = () => {
  const {
    data: { related_properties },
  } = useContextProvider()

  const properties = useMemo(() => {
    return (
      related_properties?.map((property: any) => ({
        id: property.id,
        ...property,
        location: [property.area_2, property.area_1].filter(Boolean).join(', '),
        image: property.images[0]?.file ?? { url: '', alt: '' },
      })) ?? []
    )
  }, [related_properties])

  return (
    <Box bg="white">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Box maxWidth="1200px" margin="0 auto" padding={4}>
          {/* <ImageGallery images={galleryImages} /> */}
          <PropertyGrid properties={properties} />
        </Box>
      </Container>
    </Box>
  )
}

export default PropertyListing
