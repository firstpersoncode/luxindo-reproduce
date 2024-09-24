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
import { useContextProvider } from '../providers'
import { locales } from '@/locales'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const LanguageSelector: React.FC = () => {
  const { setLocale, locale } = useContextProvider()
  const { asPath } = useRouter()

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="link" color="inherit" minW={0}>
          <Box
            position="relative"
            width={'24px'}
            height={'24px'}
            borderRadius="50%"
            overflow="hidden"
          >
            <Image
              src={`https://flagsapi.com/${locale === 'en' ? 'GB' : locale.toUpperCase()}/flat/24.png`}
              alt="Language Icon"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Text ml="12px" textTransform="uppercase" fontSize="12px">
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
                  <Text textTransform="uppercase" color="black">
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
