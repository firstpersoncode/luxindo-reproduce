import React from 'react'
import {
  VStack,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
} from '@chakra-ui/react'

const PriceFilter: React.FC = () => {
  return (
    <VStack spacing={4} align="stretch" width="100%">
      <HStack justifyContent="space-between">
        <Text fontSize="16px" fontWeight="400">
          $0
        </Text>

        <Text fontSize="16px" fontWeight="400">
          $4.444.000
        </Text>
      </HStack>
      <Flex>
        <Slider aria-label="price-filter" defaultValue={30}>
          <SliderTrack bg="gray.200">
            <SliderFilledTrack bg="gray.500" />
          </SliderTrack>
          <SliderThumb boxSize={4} />
        </Slider>
      </Flex>
    </VStack>
  )
}

export default PriceFilter
