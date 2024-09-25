import { Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useContextProvider } from './providers'

const ContactButton: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <Button
      gap="12px"
      backgroundColor="rgba(24, 28, 37, 1)"
      color="white"
      padding="12px 16px"
      fontSize="12px"
      fontWeight={500}
      position="fixed"
      right="18px"
      bottom="18px"
    >
      <Image src="/icons/contact.png" alt="Phone icon" width={16} height={16} />
      <Text display={{ base: 'none', md: 'block' }} textTransform="uppercase">
        {getLocale('Contact Us')}
      </Text>
    </Button>
  )
}

export default ContactButton
