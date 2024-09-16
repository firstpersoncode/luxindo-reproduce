import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

const PopularAreas: React.FC = () => {
  const areas = [
    "ULUWATU",
    "BALANGAN",
    "BINGIN",
    "TUMBAK BAYUH",
    "BABAKAN",
    "BERAWA",
  ];

  return (
    <Box mt={16}>
      <Heading as="h2" size="lg" textTransform="uppercase" mb={8}>
        Popular Areas for Property Investment
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
        {areas.map((area, index) => (
          <Text key={index} fontWeight="bold" color="rgba(71, 60, 56, 1)">
            {area}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PopularAreas;