import React, { useEffect, useMemo, useState } from 'react'
import { Box, Text, Image, Flex, Badge, Progress } from '@chakra-ui/react'
import { useContextProvider } from './providers'
import Link from 'next/link'

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
  const { getLocale } = useContextProvider()
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
        <Text fontSize="12px" color="brand.secondary">
          {location}
        </Text>
        <Text fontSize="16px" fontWeight="bold" textTransform="uppercase" my={2}>
          {title}
        </Text>
        <Text fontSize="18px" fontWeight="bold" color="brand.secondary">
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
            <Text fontSize="12px">{bedrooms}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Text fontSize="12px">{bathrooms}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <Text fontSize="12px">{area}</Text>
          </Flex>
          <Flex align="center" gap={2}>
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
  const { docs, locale, isLoading, handleNextPage } = useContextProvider()

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

  useEffect(() => {
    const nextPage = document.getElementById('NextPage')
    if (!nextPage) return
    // detect if scrolled to element id NextPage
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          handleNextPage()
        }
      },
      { threshold: 1 },
    )

    observer.observe(nextPage)

    return () => {
      observer.disconnect()
    }
  }, [isLoading, handleNextPage])

  return (
    <>
      {isLoading && <Progress colorScheme="primary" size="xs" isIndeterminate />}
      <Box opacity={isLoading ? 0.3 : 1}>
        {properties.map((property, index) => (
          <Link key={index} href={`/${property.slug}`} locale={locale}>
            <PropertyCard key={index} {...property} />
          </Link>
        ))}
      </Box>
      <Box id="NextPage" />
      {isLoading && <Progress colorScheme="primary" size="xs" isIndeterminate />}
    </>
  )
}

export default PropertyList
