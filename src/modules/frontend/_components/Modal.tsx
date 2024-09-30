import {
  Modal as CKModal,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

interface SizeExampleProps {
  isOpen: boolean
  onClose: () => void
  size: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, size, children }: SizeExampleProps) {
  return (
    <CKModal onClose={onClose} size={size} isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent backgroundColor="rgba(0,0,0,0.25)" backdropFilter="blur(10px)">
        <ModalBody>{children}</ModalBody>
      </ModalContent>
      <Flex zIndex={2000} position="fixed" right="18px" top="18px" alignItems="center">
        <Text color="white" textTransform="uppercase">
          Close
        </Text>
        <ModalCloseButton position="static" color="white" />
      </Flex>
    </CKModal>
  )
}
