import React, { useMemo } from 'react'
import { Box, Flex, Text, Container, Divider } from '@chakra-ui/react'
import FooterSection from './FooterSection'
import { useContextProvider } from '@/modules/frontend/globals/providers'
import Image from 'next/image'

const Footer: React.FC = () => {
  const { data } = useContextProvider()
  const footer = useMemo(() => data?.footer, [data?.footer])

  return (
    <Box as="footer" bg="rgba(25, 25, 25, 1)" py={{ base: 8, md: 20 }}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap={{ base: 10, md: 25 }}
        >
          {footer?.logo?.url && (
            <Box position="relative" width={{ base: '215px', md: '290px' }} height={{ base: '37px', md: '50px' }}>
              <Image src={footer.logo.url} alt={footer.logo.alt ?? 'Company Logo'} fill />
            </Box>
          )}
          <Flex wrap="wrap" gap={{ base: 16, md: 32 }}>
            {footer?.navigation_groups?.map((group: any, index: number) => (
              <FooterSection key={index} title={group.label} items={group.navigations} />
            ))}
          </Flex>
        </Flex>
        <Divider mt={{ base: '32px', md: 32 }} mb="32px" />
        <Text color="white" fontSize="14px">
          {footer?.footer_note}
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
