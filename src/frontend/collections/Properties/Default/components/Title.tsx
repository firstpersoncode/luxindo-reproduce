import React from "react";
import { Box, Heading, Text, Skeleton } from "@chakra-ui/react";
import { useContextProvider } from "../../libs/providers";


const PropertyTitle: React.FC = () => {
  const {data: {title, area_1, area_2}, isLoading} = useContextProvider();
  return (
    <Box as="header" borderBottom="1px solid" borderColor="gray.300" py={3}>
      <Skeleton isLoaded={!isLoading}>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="600"
          lineHeight={{ base: "1.2", md: "1.3" }}
          color="gray.800"
        >
          {title}
        </Heading>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} mt={2}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="400"
          color="gray.600"
        >
          {[area_2, area_1].filter(Boolean).join(", ")}
        </Text>
      </Skeleton>
    </Box>
  );
};

export default PropertyTitle;