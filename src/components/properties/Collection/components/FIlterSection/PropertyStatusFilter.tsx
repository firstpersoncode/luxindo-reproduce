import React from 'react';
import { VStack, Text, Checkbox } from '@chakra-ui/react';

const PropertyStatusFilter: React.FC = () => {
  return (
    <VStack align="stretch" spacing={4} width="100%" mt={6}>
      <Text fontSize="16px" fontWeight="400">
        Property Status
      </Text>
      <Checkbox colorScheme="gray">Freehold</Checkbox>
      <Checkbox colorScheme="gray">Leasehold</Checkbox>
    </VStack>
  );
};

export default PropertyStatusFilter;