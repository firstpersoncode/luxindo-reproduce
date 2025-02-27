import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Button,
} from '@chakra-ui/react'
import { useContextProvider } from '@/modules/frontend/globals/providers'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CURRENCIES } from '@/modules/options'

const CurrencySelector: React.FC = () => {
  const { setCurrency, currency } = useContextProvider()
  const { asPath } = useRouter()

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="link" color="inherit" minW={0}>
          <Text textTransform="uppercase" fontSize="12px">
            {currency}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverArrow />
        <PopoverBody>
          <Flex direction="column" gap="2">
            {CURRENCIES.map((l) => (
              <Link
                href={{
                  pathname: asPath.split('?')[0],
                  query: {
                    currency: l.value,
                  },
                }}
                key={l.value}
              >
                <Button
                  width="100%"
                  variant={currency === l.value ? 'solid' : 'outline'}
                  onClick={() => setCurrency(l.value)}
                >
                  <Text textTransform="uppercase" color="brand.secondary">
                    {l.label}
                  </Text>
                </Button>
              </Link>
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default CurrencySelector
