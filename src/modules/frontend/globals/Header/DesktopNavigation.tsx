import React, { useMemo } from 'react'
import { Box, Flex, Divider } from '@chakra-ui/react'
import NavItem from './NavItem'
import LanguageSelector from './LanguageSelector'
import { useContextProvider } from '../providers'
import CurrencySelector from './CurrencySelector'

const DesktopNavigation: React.FC = () => {
  const { data } = useContextProvider()
  const header = useMemo(() => data?.header, [data?.header])

  return (
    <Flex
      alignSelf="stretch"
      alignItems="center"
      gap={{ base: '16px', md: '32px' }}
      justifyContent="flex-start"
      flexWrap="wrap"
      minWidth="240px"
      display={{ base: 'none', md: 'flex' }}
    >
      <Flex
        alignSelf="stretch"
        alignItems="center"
        gap={{ base: '20px', md: '40px' }}
        justifyContent="flex-start"
        flexWrap="wrap"
        minWidth="240px"
        color="white"
      >
        {header?.navigations?.map((item: any, index: number) => <NavItem key={index} {...item} />)}
      </Flex>
      <Divider orientation="vertical" borderColor="white" alignSelf="stretch" />
      <Flex alignItems="center">
        <LanguageSelector />
        <Box mx="8px">•</Box>
        <CurrencySelector />
      </Flex>
    </Flex>
  )
}

export default DesktopNavigation
