import React from "react";
import { Box, Text, Skeleton } from "@chakra-ui/react";

interface ArchitectureCardProps {
  title: string;
  isLoading?: boolean;
}

const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ title, isLoading = false }) => {
  return (
    <Box
      position="relative"
      flexBasis="auto"
      flexGrow={1}
      borderRadius="md"
      boxShadow="md"
      p={4}
    >
      <Skeleton isLoaded={!isLoading}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Skeleton>
    </Box>
  );
};

export default ArchitectureCard;