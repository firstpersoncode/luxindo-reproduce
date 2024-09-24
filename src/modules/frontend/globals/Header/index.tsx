import React, { useMemo } from 'react'
import { Box, Flex, Container } from '@chakra-ui/react'
import { useContextProvider } from '../providers'
import Image from 'next/image'
import MobileDrawer from './MobileDrawer'
import DesktopNavigation from './DesktopNavigation'
import Link from 'next/link'

const Header: React.FC = () => {
  const { data, locale, isScrolledToTop } = useContextProvider()
  const header = useMemo(() => data?.header, [data?.header])

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={500}
      backgroundColor={isScrolledToTop ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.75)'}
      transition="background-color 0.3s"
      py="18px"
    >
      <Container maxW="container.xl">
        <Flex
          as="header"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          color="white"
          fontSize="12px"
          fontWeight={400}
        >
          {header?.logo?.url && (
            <Link href="/" locale={locale}>
              <Box
                position="relative"
                width={{ base: '154px', md: '195px' }}
                height={{ base: '26px', md: '33px' }}
              >
                <Image src={header.logo.url} alt={header.logo.alt ?? 'Company Logo'} fill />
              </Box>
            </Link>
          )}

          <DesktopNavigation />

          <MobileDrawer />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
