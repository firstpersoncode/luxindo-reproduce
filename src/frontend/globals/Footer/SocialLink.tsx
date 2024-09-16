import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';

interface SocialLinkProps {
  icon: string;
  name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, name }) => {
  return (
    <HStack spacing={2}>
      <Image src={icon} alt={`${name} icon`} boxSize="16px" objectFit="contain" />
      <Text color="white" fontSize="xs" letterSpacing="0.6px">
        {name}
      </Text>
    </HStack>
  );
};

export default SocialLink;