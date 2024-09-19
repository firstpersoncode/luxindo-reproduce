import React from 'react'
import { Box, Text, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useContextProvider } from '@/modules/Property/frontend/globals/providers'

interface PropertyCardProps {
  title: string
  location: string
  price: string
  currency: string
  imageSrc: string
  image: { url: string }
  slug: string
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  slug,
  title,
  location,
  price,
  currency,
  imageSrc,
}) => {
  const { locale } = useContextProvider()
  return (
    <Link href={`/${['property', slug].filter(Boolean).join('/')}`} locale={locale}>
      <Box bg="white" p={6} fontFamily="Source Sans Pro, sans-serif">
        <Image src={image.url} alt={`Gallery image`} objectFit="contain" width="100%" />

        <Text color="rgba(44, 62, 80, 1)" fontSize="17px" fontWeight="600" lineHeight="27px" mb={4}>
          {title}
          <br />
          <Text as="span" fontWeight="400">
            {location}
          </Text>
        </Text>
        {/* <Image src={imageSrc} alt={`Property in ${location}`} objectFit="contain" width="100%" mb={4} /> */}
        <Flex alignItems="baseline" color="rgba(52, 47, 44, 1)">
          <Text fontSize="18px" fontWeight="700" mr={1}>
            {(price || 0).toLocaleString()}
          </Text>
          <Text fontSize="15px" fontWeight="400">
            /{currency}
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}

export default PropertyCard
