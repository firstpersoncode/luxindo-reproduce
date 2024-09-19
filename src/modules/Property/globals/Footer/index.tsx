import React from 'react';
import { Box, Flex, Image, Text, VStack, HStack, Container } from '@chakra-ui/react';
import SocialLink from './SocialLink';
import FooterSection from './FooterSection';
import { pageLinks, socialLinks, contactInfo } from './footerData';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="rgba(25, 25, 25, 1)" py={{ base: 8, md: 20 }} px={{ base: 5, md: 32 }}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-start" wrap="wrap" gap={{ base: 10, md: 25 }}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc033e92cd8b00898e24c5bcc3850056505052386a4c972a37276771a4602c3?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
            alt="Company Logo"
            objectFit="contain"
            w={{ base: '240px', md: '291px' }}
            h="auto"
          />
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 25 }} flex={1}>
            <FooterSection title="PAGES" items={pageLinks} />
            <FooterSection title="SOCIAL">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </FooterSection>
            <FooterSection title="CONTACT">
              <VStack align="flex-start" spacing={6}>
                {contactInfo.map((info, index) => (
                  <Text key={index} color="white" fontSize={info.fontSize || 'sm'} letterSpacing={info.letterSpacing}>
                    {info.text}
                  </Text>
                ))}
              </VStack>
            </FooterSection>
          </Flex>
        </Flex>
        <Box borderTop="1px solid white" my={{ base: 10, md: 32 }} />
        <Text color="white" textAlign="right" fontSize="md">
          © 2024 Luxindo Property. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;