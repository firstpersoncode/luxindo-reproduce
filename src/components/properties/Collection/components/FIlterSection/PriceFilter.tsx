import React from 'react';
import { VStack, Text, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

const PriceFilter: React.FC = () => {
  return (
    <VStack align="stretch" spacing={4} width="100%">
      <Text fontSize="16px" fontWeight="400">
        Price filter
      </Text>
      <Flex>
        <Slider aria-label="price-filter" defaultValue={30}>
          <SliderTrack bg="gray.200">
            <SliderFilledTrack bg="gray.500" />
          </SliderTrack>
          <SliderThumb boxSize={4} />
        </Slider>
      </Flex>
      <Text fontSize="16px" fontWeight="400">
        $0 — $4.444.000
      </Text>
    </VStack>
  );
};

export default PriceFilter;