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
     
      <Text margin="auto 0">{getLocale('Print')}</Text>
    </Flex>
  )
}

export default PrintButton
