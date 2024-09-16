import React from 'react';
import { Box, VStack, Text, Flex, Checkbox, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PriceFilter from './PriceFilter';
import PropertyStatusFilter from './PropertyStatusFilter';
import PropertyLabelFilter from './PropertyLabelFilter';
import PropertyFeatureFilter from './PropertyFeatureFilter';

const FilterSection: React.FC = () => {
  return (
    <Box
      display={{ base: 'none', lg: 'flex' }}
      width="100%"
      flexDirection="column"
      alignItems="start"
      mt={{ base: '40px', lg: '0' }}
    > 
      <PriceFilter />
      <PropertyStatusFilter />
      <PropertyLabelFilter />
      <PropertyFeatureFilter />
    </Box>
  );
};

export default FilterSection;