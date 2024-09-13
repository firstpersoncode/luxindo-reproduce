import React from "react";
import { VStack, Text } from "@chakra-ui/react";

interface PropertyStatProps {
  label: string;
  value: string | number;
}

const PropertyStat: React.FC<PropertyStatProps> = ({ label, value }) => {
  return (
    <VStack align="start" spacing={0}>
      <Text>{label}:</Text>
      <Text fontWeight="700">{value}</Text>
    </VStack>
  );
};

export default PropertyStat;