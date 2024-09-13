import React from "react";
import { VStack } from "@chakra-ui/react";
import ArchitectureCard from "./Card";

interface ArchitectureListProps {
  isLoading?: boolean;
}

const ArchitectureList: React.FC<ArchitectureListProps> = ({ isLoading = false }) => {
  const architectureStyles = [
    "Modern Balinese",
    "Contemporary Tropical",
    "Minimalist Asian",
    "Eco-Friendly Bamboo",
  ];

  return (
    <VStack spacing={4} align="stretch">
      {architectureStyles.map((style, index) => (
        <ArchitectureCard key={index} title={style} isLoading={isLoading} />
      ))}
    </VStack>
  );
};

export default ArchitectureList;