import {
  useDisclosure,
  Button,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Divider,
  Flex,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useMemo, useRef } from 'react'
import { useContextProvider } from '@/modules/frontend/globals/providers'
import NavItem from './NavItem'
import LanguageSelector from './LanguageSelector'
import CurrencySelector from './CurrencySelector'
import Modal from './Modal'

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  const { data } = useContextProvider()
  const header = useMemo(() => data?.header, [data?.header])

  return (
    <>
      <Button
        ref={btnRef}
        display={{ base: 'flex', md: 'flex', lg: 'none' }}
        alignItems="center"
        gap="8px"
        minW={0}
        variant="link"
        color="white"
        onClick={onOpen}
      >
        <Text fontSize="12px">MENU</Text>
        <HamburgerIcon width={'20px'} height={'20px'} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <VStack
          minH="100vh"
          pt='200px'
          pb="64px"
          px={{ base: '18px', md: '64px' }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <VStack alignItems="flex-start" gap={{base: "18px", md: "32px"}} color="white">
            {header?.navigations?.map((item: any, index: number) => (
              <NavItem key={index} {...item} />
            ))}
          </VStack>
          <Flex alignItems="center" color="white">
            <LanguageSelector />
            <Box mx="8px">•</Box>
            <CurrencySelector />
          </Flex>
        </VStack>
      </Modal>

      {/* <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef as any}>
        <DrawerOverlay />
        <DrawerContent background="brand.secondary" color="white">
          <DrawerCloseButton />
          <DrawerHeader>MENU</DrawerHeader>

          <DrawerBody>
            <VStack alignItems="flex-start">
              {header?.navigations?.map((item: any, index: number) => (
                <NavItem key={index} {...item} />
              ))}
            </VStack>
            <Divider my="18px" />
            <Flex alignItems="center">
              <LanguageSelector />
              <Box mx="8px">•</Box>
              <CurrencySelector />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </>
  )
}
