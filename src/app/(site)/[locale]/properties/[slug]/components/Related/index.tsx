import React, { useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import PropertyGrid from './PropertyGrid'
import { useContextProvider } from '../../libs/providers'

// const properties = [
//   {
//     id: '1',
//     title: 'PERERENAN – DISCOVER YOUR PERFECT RETREAT IN NORTH PERERENAN! (LHV807)',
//     location: 'Pererenan, CANGGU AREA',
//     price: 'IDR 4,557,000,000',
//     currency: 'IDR',
//     image: {
//       url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/70b43c1d1ef8dec7dca63f8b72e853c24d0b62495344e65225a9b8db8e72d34a?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185',
//     },
//   },
//   {
//     id: '2',
//     title: 'PAYANGAN – 4,418 M2 FREEHOLD LAND WITH GOOD POTENTIAL (FHL358)',
//     location: 'Payangan, UBUD AREA',
//     price: 'IDR 4,329,640,000',
//     currency: 'IDR',
//     image: {
//       url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55acaba83b99a9090df1061dda87c1d3ed677ce2a2d401eddc55b6bd7b74072d?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185',
//     },
//   },
//   {
//     id: '3',
//     title: 'TUMBAK BAYUH – ECO FRIENDLY 4 BEDROOM VILLA WITH JUNGLE VIEWS FOR LEASE (LHV403)',
//     location: 'Tumbak Bayuh, CANGGU AREA',
//     price: 'IDR 6,000,000,000',
//     currency: 'IDR',
//     image: {
//       url: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d39c061a1add4676c3f7c7a9ea2514af62aeae27dff131cbfb298c1c6b3efd0b?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185',
//     },
//   },
// ]

const PropertyListing: React.FC = () => {
  const {
    data: {related_properties},
  } = useContextProvider()

  const properties = useMemo(() => {
    return related_properties.map((property: any) => ({
      id: property.id,
      ...property,
      location: [property.area_2, property.area_1].filter(Boolean).join(', '),
      image: property.images[0]?.file ?? { url: '', alt: '' },
    }))
  }, [related_properties])
  
  return (
    <Box maxWidth="1200px" margin="0 auto" padding={4}>
      {/* <ImageGallery images={galleryImages} /> */}
      <PropertyGrid properties={properties} />
    </Box>
  )
}

export default PropertyListing
