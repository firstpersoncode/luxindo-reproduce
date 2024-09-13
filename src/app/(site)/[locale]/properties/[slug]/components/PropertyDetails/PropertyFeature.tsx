import React from "react";
import { Box, VStack, Image, Text } from "@chakra-ui/react";

interface PropertyFeatureProps {
  icon: string;
  label: string;
  value: number;
}

const PropertyFeature: React.FC<PropertyFeatureProps> = ({ icon, label, value }) => {
  return (
    <Box
      bg="rgba(228, 228, 228, 1)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      p="19px 16px 1px"
      border="1px solid rgba(255, 255, 255, 1)"
    >
      <Image
        src={icon}
        alt=""
        objectFit="contain"
        objectPosition="center"
        w="26px"
        aspectRatio="0.84"
      />
      <Text fontSize="15px" fontWeight="400" lineHeight="1.6" mt="11px">
        {label}
      </Text>
      <Text
        borderTop="1px solid rgba(255, 255, 255, 1)"
        alignSelf="stretch"
        mt="18px"
        fontSize="20px"
        fontWeight="600"
        lineHeight="1"
        p="20px 67px"
      >
        {value}
      </Text>
    </Box>
  );
};

export default PropertyFeature;