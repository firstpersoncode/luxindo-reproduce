import React, { useMemo } from 'react'
import { Box, SimpleGrid, Text, Image, Flex, Badge, Progress } from '@chakra-ui/react'
import { useContextProvider } from './providers'
import Link from 'next/link'
import { useContextProvider as useGlobalContextProvider } from '@/modules/Property/frontend/globals/providers'

interface PropertyCardProps {
  image: string
  status: string
  type: string
  location: string
  title: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  leaseYears: number
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  status,
  type,
  location,
  title,
  price,
  bedrooms,
  bathrooms,
  area,
  leaseYears,
}) => {
  const { getLocale } = useGlobalContextProvider()
  return (
    <Box borderRadius="5px" boxShadow="0px 5px 10px rgba(0, 0, 0, 0.09)" overflow="hidden">
      <Box position="relative">
        <Image src={image} alt={title} w="100%" h="200px" objectFit="cover" />
        <Flex position="absolute" top={2} left={2} gap={2}>
          <Badge colorScheme="orange">{status}</Badge>
          <Badge colorScheme="orange">{type}</Badge>
        </Flex>
      </Box>
      <Box p={4}>
        <Text fontSize="12px" color="gray.600">
          {location}
        </Text>
        <Text fontSize="16px" fontWeight="bold" textTransform="uppercase" my={2}>
          {title}
        </Text>
        <Text fontSize="18px" fontWeight="bold" color="rgba(71, 60, 56, 1)">
          {price}
        </Text>
        <Flex
          borderTop="1px solid"
          borderColor="gray.200"
          mt={4}
          pt={4}
          justifyContent="space-between"
        >
          <Flex align="center" gap={2}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/392ffe49e93263c596f14775191e0162c5200c7d63967aedfb6b4e355567cb91?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
              alt="Bedrooms"
              w="15px"
              h="15px"
            />
            <Text fontSize="12px">{bedrooms}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e91c46227abdf2b2c56c9538425585c7e55912ea8229e0bbc3d901e3fa174e?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
              alt="Bathrooms"
              w="15px"
              h="15px"
            />
            <Text fontSize="12px">{bathrooms}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/579a0e2a6faba39ef255603ea910f010a5ec0ba1e9d32ec88958c7b1b5b60680?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
              alt="Area"
              w="15px"
              h="15px"
            />
            <Text fontSize="12px">{area}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/efa039afcdba28ca016a495b3a5debabfedf8d97a188517489f4d75c3233f063?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
              alt="Lease Years"
              w="15px"
              h="15px"
            />
            <Text fontSize="12px">
              {leaseYears} {getLocale('years')}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

const PropertyList: React.FC = () => {
  const { docs, isLoading } = useContextProvider()
  const { locale } = useGlobalContextProvider()

  const properties = useMemo(() => {
    return docs.map((doc) => ({
      slug: doc.slug,
      image: doc.images?.[0]?.file?.url,
      status: doc.ownership,
      type: doc.type,
      location: [doc.area_2, doc.area_1].filter(Boolean).join(' - '),
      title: doc.title,
      price: `${doc.currency}${doc.price?.toLocaleString() ?? 0}`,
      bedrooms: 4,
      bathrooms: 4,
      area: '647 sqm',
      leaseYears: 27,
    }))
  }, [docs])

  return (
    <>
      {isLoading && <Progress size='xs' isIndeterminate />}
      <Box opacity={isLoading ? 0.3 : 1}>
        {properties.map((property, index) => (
          <Link key={index} href={`/${property.slug}`} locale={locale}>
            <PropertyCard key={index} {...property} />
          </Link>
        ))}
      </Box>
    </>
  )
}

export default PropertyList
