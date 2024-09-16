import React from 'react';
import { Box, Button, Flex, Select, Input } from '@chakra-ui/react';

const SearchFilters: React.FC = () => {
  return (
    <Box mt={8}>
      <Flex flexWrap="wrap" gap={4}>
        <Select placeholder="SELECT STATUS" flex={1} minW="200px">
          {/* Add status options */}
        </Select>
        <Select placeholder="SELECT AREA" flex={1} minW="200px">
          {/* Add area options */}
        </Select>
        <Select placeholder="BEDROOMS" flex={1} minW="200px">
          {/* Add bedroom options */}
        </Select>
        <Input placeholder="MIN PRICE" flex={1} minW="200px" />
        <Input placeholder="MAX PRICE" flex={1} minW="200px" />
        <Select placeholder="LAND ZONE" flex={1} minW="200px">
          {/* Add land zone options */}
        </Select>
        <Input placeholder="PROPERTY ID" flex={1} minW="200px" />
        <Button
          bg="rgba(171, 116, 95, 1)"
          color="white"
          fontWeight="700"
          px={4}
          py={2}
        >
          FIND PROPERTIES
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchFilters;