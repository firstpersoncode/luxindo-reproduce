import { Button, Text } from '@chakra-ui/react'
import Image from '@/modules/frontend/_components/Image'
import { useContextProvider } from '@/modules/frontend/globals/providers'

const ContactButton: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <Button
      gap="12px"
      backgroundColor="brand.background"
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
