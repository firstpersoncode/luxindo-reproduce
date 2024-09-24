import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import { useContextProvider } from '../../../providers'

const PrintButton: React.FC = () => {
  const { getLocale } = useContextProvider()
  return (
    <Flex
      alignSelf="end"
      marginTop="15px"
      gap="11px"
      fontWeight="700"
      whiteSpace={{ base: 'initial', lg: 'nowrap' }}
      textAlign="center"
      textTransform="uppercase"
      padding="13px 17px"
      border="2px solid rgba(44, 62, 80, 1)"
      cursor="pointer"
      role="button"
      tabIndex={0}
      onClick={() => window.print()}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.print()
        }
      }}
    >
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43db769919eb7ea6d43e48f080e97d4b2718675a613d6a1156f99ea464aec982?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
        alt=""
        objectFit="contain"
        objectPosition="center"
        width="14px"
        height="15px"
      />
      <Text margin="auto 0">{getLocale('Print')}</Text>
    </Flex>
  )
}

export default PrintButton
