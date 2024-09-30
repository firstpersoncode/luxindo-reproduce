import React from 'react'
import { Box, Flex, Text, Image, Button, SkeletonText, Container } from '@chakra-ui/react'
import ShareButtons from './ShareButtons'
import PrintButton from './PrintButton'
import { useContextProvider } from '../../../providers'

const FinancialDisplay: React.FC = ({}) => {
  const {
    data: { price: amount, currency },
    isLoading,
  } = useContextProvider()
  return (
    <Box bg="white">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Flex
          gap="20px"
          flexWrap="wrap"
          justifyContent="space-between"
          maxWidth={{ base: '100%', lg: 'auto' }}
        >
          <Flex flexDirection="column" lineHeight="1" margin="auto 0">
            <SkeletonText isLoaded={!isLoading} noOfLines={1} spacing="4">
              <Text
                color="rgba(52, 47, 44, 1)"
                fontSize={{ base: '40px', lg: '46px' }}
                fontWeight="600"
              >
                {(amount || 0).toLocaleString()}
              </Text>
            </SkeletonText>
            <SkeletonText isLoaded={!isLoading} noOfLines={1} spacing="4">
              <Text
                color="rgba(44, 62, 80, 1)"
                fontSize="15px"
                fontWeight="400"
                alignSelf="start"
                marginTop="8px"
              >
                /{currency}
              </Text>
            </SkeletonText>
          </Flex>
          <Flex flexDirection="column" fontSize="15px" color="rgba(44, 62, 80, 1)" lineHeight="1.6">
            <ShareButtons />
            <PrintButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default FinancialDisplay
