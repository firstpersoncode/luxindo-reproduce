import React from 'react'
import { Box, Flex, Image, Text, Divider, Button, Container } from '@chakra-ui/react'
import { css } from '@emotion/react'
import NavItem from './NavItem'
import LanguageSelector from './LanguageSelector'

const navItems = ['PRESTIGE', 'VILLA', 'LAND', 'VILLA RENT', 'COMMERCIAL', 'CONTACT']

const Header: React.FC = () => {
  return (
    <Box position="fixed" top="0" left="0" right="0" zIndex={500}>
      <Container maxW="container.xl">
        <Flex
          as="header"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={{ base: '20px', md: '40px 100px' }}
          color="white"
          letterSpacing="0.6px"
          fontFamily="Inter, sans-serif"
          fontSize="12px"
          fontWeight={400}
          css={css`
            @media (max-width: 991px) {
              max-width: 100%;
            }
          `}
        >
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b06c9ceffcbc3bb8de5d5cc13431a315c344a75fccdb3ed1d9c1ea49c2cd4353?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
            alt="Company Logo"
            objectFit="contain"
            width="195px"
            alignSelf="stretch"
            loading="lazy"
          />
          <Flex
            alignSelf="stretch"
            alignItems="center"
            gap={{ base: '16px', md: '32px' }}
            justifyContent="flex-start"
            flexWrap="wrap"
            minWidth="240px"
            css={css`
              @media (max-width: 991px) {
                max-width: 100%;
              }
            `}
          >
            <Flex
              alignSelf="stretch"
              alignItems="center"
              gap={{ base: '20px', md: '40px' }}
              justifyContent="flex-start"
              flexWrap="wrap"
              minWidth="240px"
              css={css`
                @media (max-width: 991px) {
                  max-width: 100%;
                }
              `}
            >
              {navItems.map((item, index) => (
                <NavItem key={index} label={item} />
              ))}
            </Flex>
            <Divider orientation="vertical" height="20px" borderColor="white" alignSelf="stretch" />
            <LanguageSelector />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
