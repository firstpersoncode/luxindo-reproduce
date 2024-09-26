import {
  Box,
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
import { locales } from '@/modules/locales'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const LanguageSelector: React.FC = () => {
  const { setLocale, locale } = useContextProvider()
  const { asPath } = useRouter()

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="link" color="inherit" minW={0} gap="8px">
          <Box
            position="relative"
            width={'16px'}
            height={'16px'}
            borderRadius="50%"
            overflow="hidden"
            boxShadow={'0 0 2px rgba(0,0,0,0.5)'}
          >
            <Image
              src={`/icons/flag_${locale}.png`}
              alt="Language Icon"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Text textTransform="uppercase" fontSize="12px">
            {locale}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverArrow />
        <PopoverBody>
          <Flex direction="column" gap="2">
            {locales.map((l, index) => (
              <Link key={index} href={asPath} locale={l}>
                <Button
                  width="100%"
                  variant={locale === l ? 'solid' : 'outline'}
                  onClick={() => setLocale(l)}
                >
                  <Text textTransform="uppercase" color="brand.secondary">
                    {l}
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

export default LanguageSelector
