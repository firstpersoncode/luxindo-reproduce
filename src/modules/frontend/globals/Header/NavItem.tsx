import { Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

interface NavItemProps {
  title: string
  value: string
}

const NavItem: React.FC<NavItemProps> = ({ title, value }) => {
  return (
    <Link href={value}>
      <Button as="nav" variant="link" color="inherit">
        <Text textTransform="uppercase" fontSize="12px">{title}</Text>
      </Button>
    </Link>
  )
}

export default NavItem
