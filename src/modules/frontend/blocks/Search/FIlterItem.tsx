import React from "react";
import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";

interface FilterItemProps {
  icon: string;
  label: string;
  value: string;
  unit?: string;
  badge?: string;
}

const FilterItem: React.FC<FilterItemProps> = ({ icon, label, value, unit, badge }) => {
  return (
    <Box flex="1" minW="240px" alignSelf="stretch">
      <Flex alignItems="start" gap="8px" fontSize="12px" fontWeight="500" textTransform="uppercase" letterSpacing="1.2px">
        <Image src={icon} alt="" w="16px" h="16px" />
        <Text>{label}</Text>
        {badge && (
          <Box borderRadius="360px" bg="#FF3140" color="white" textAlign="center" letterSpacing="1px" w="23px" p="2px 4px" fontSize="10px">
            {badge}
          </Box>
        )}
      </Flex>
      <Box mt="16px" fontSize="12px" fontWeight="400">
        <Flex justifyContent="space-between" alignItems="start">
          <Text>{value}</Text>
          {unit && (
            <Flex alignItems="center" gap="8px">
              <Text>{unit}</Text>
              <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/52ead3ba64fe4a5ea2a4655933486da14f08307f3ef93e244da7eb7ef23573ab?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185" alt="" w="16px" h="16px" />
            </Flex>
          )}
        </Flex>
        <Divider mt="8px" borderColor="#DCE0E5" />
      </Box>
    </Box>
  );
};

export default FilterItem;