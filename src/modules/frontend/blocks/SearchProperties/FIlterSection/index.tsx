import React from 'react';
import { Box } from '@chakra-ui/react';
import PriceFilter from './PriceFilter';
import SearchFilters from './SearchFilters';

const FilterSection: React.FC = () => {
  return (
    <Box
      width="100%"
      flexDirection="column"
      alignItems="start"
      mt={{ base: '40px', lg: '0' }}
      position="sticky"
      top="0"
    > 
      <PriceFilter />
      <SearchFilters />
      {/* <PropertyStatusFilter />
      <PropertyLabelFilter />
      <PropertyFeatureFilter /> */}
    </Box>
  );
};

export default FilterSection;