import React from 'react';
import { Box } from '@chakra-ui/react';
import PriceFilter from './PriceFilter';
import SearchFilters from './SearchFilters';
import PriceRange from './PriceRange';

const FilterSection: React.FC = () => {
  return (
    <Box
      width="100%"
      flexDirection="column"
      alignItems="start"
      mt={{ base: '40px', lg: '100px' }}
      // position="sticky"
      // top="0"
    > 
      <PriceRange />
      <SearchFilters />
      {/* <PropertyStatusFilter />
      <PropertyLabelFilter />
      <PropertyFeatureFilter /> */}
    </Box>
  );
};

export default FilterSection;