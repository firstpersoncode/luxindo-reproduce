import { Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { cormorant, inter } from '@/modules/frontend/globals'

interface NavItemProps {
  title: string
  value: string
}

const NavItem: React.FC<NavItemProps> = ({ title, value }) => {
  return (
    <Link href={value}>
      <Button minWidth={0} as="nav" variant="link" color="inherit">
        <Text
          textTransform="uppercase"
          fontFamily={{ base: cormorant.style.fontFamily, lg: inter.style.fontFamily }}
          fontSize={{ base: '30px', md: '48px', lg: '12px' }}
        >
          {title}
        </Text>
      </Button>
    </Link>
  )
}

export default NavItem
