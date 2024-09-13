import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ArchitectureList from "./List";
import Title from "./Title"

const ArchitectureSection: React.FC = () => {
  return (
    <Box as="section" py={8}>
      <Title />
      <ArchitectureList  />
    </Box>
  );
};

export default ArchitectureSection;