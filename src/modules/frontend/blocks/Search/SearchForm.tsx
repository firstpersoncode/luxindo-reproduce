import React from "react";
import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";
import FilterItem from "./FilterItem";
import { filterData } from "./filterData";

interface PropertyFiltersProps {}

const PropertyFilters: React.FC<PropertyFiltersProps> = () => {
  return (
    <Box bg="white" mt={["40px", null, "48px"]} w="100%" p={["20px", null, "24px"]}>
      <Flex direction="column" w="100%">
        <Flex w="100%" alignItems="center" gap="24px" fontFamily="Inter" color="#333" flexWrap="wrap">
          {filterData.slice(0, 4).map((item, index) => (
            <FilterItem key={index} {...item} />
          ))}
        </Flex>
        <Flex mt="32px" w="100%" alignItems="center" gap="24px" flexWrap="wrap">
          {filterData.slice(4).map((item, index) => (
            <FilterItem key={index} {...item} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PropertyFilters;