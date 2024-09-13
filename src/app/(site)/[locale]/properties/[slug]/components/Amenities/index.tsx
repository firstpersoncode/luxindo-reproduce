import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ArchitectureList from "./List";
import Title from "./Title"

interface ArchitectureSectionProps {
  isLoading?: boolean;
}

const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ isLoading = false }) => {
  return (
    <Box as="section" py={8}>
      <Title />
      <ArchitectureList isLoading={isLoading} />
    </Box>
  );
};

export default ArchitectureSection;