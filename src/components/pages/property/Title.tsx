import React from 'react';
import { Heading, Text, Skeleton, Box } from '@chakra-ui/react';

interface VillaListingProps {
  title: string;
  location: string;
  isLoading?: boolean;
}

const VillaListing: React.FC<VillaListingProps> = ({ title, location, isLoading = false }) => {
  return (
    <Box
      as="header"
      textAlign="left"
      p="20px"
      maxW={{ base: '100%' }}
    >
      {isLoading && <Skeleton height="80px" width="100%" />}

      <Box visibility={isLoading ? 'hidden' : 'visible'}>
        <Heading as="h1" fontSize="24px" fontWeight="bold" mb="8px">
          {title}
        </Heading>
        <Text fontWeight="400">{location}</Text>
      </Box>
    </Box>
  );
}

export default VillaListing;
