import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

interface FooterSectionProps {
  title: string;
  items?: string[];
  children?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items, children }) => {
  return (
    <VStack align="flex-start" spacing={8}>
      <Text color="rgba(193, 162, 131, 1)" fontSize="2xl" fontFamily="Cormorant Infant, serif">
        {title}
      </Text>
      {items ? (
        <VStack align="flex-start" spacing={6}>
          {items.map((item, index) => (
            <Text key={index} color="white" fontSize="xs" letterSpacing="0.6px">
              {item}
            </Text>
          ))}
        </VStack>
      ) : (
        children
      )}
    </VStack>
  );
};

export default FooterSection;