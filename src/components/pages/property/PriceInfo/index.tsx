import React from 'react'
import { Box, Text, Skeleton, Button } from '@chakra-ui/react'
import ShareButtons from './ShareButtons'
import { useLayoutContext } from '../Providers'

interface PriceInfoProps {
  price: string
  currency: string
}

const PriceInfo: React.FC<PriceInfoProps> = ({ price, currency }) => {
  const { isLoading } = useLayoutContext()

  return (
    <Box
      className="price-display"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      mt="30px"
      ml="13px"
      maxW="100%"
      w="858px"
    >
      <Box
        className="price-container"
        display="flex"
        flexDirection="column"
        lineHeight="1"
        my="auto"
      >
        {isLoading ? (
          <Skeleton width="200px" height="60px" />
        ) : (
          <>
            <Text
              className="price"
              color="rgba(52, 47, 44, 1)"
              fontSize={{ base: '40px', md: '46px' }}
              fontWeight="600"
            >
              {new Intl.NumberFormat().format(Number(price))}
            </Text>
            <Text
              className="currency"
              color="rgba(44, 62, 80, 1)"
              fontSize="15px"
              fontWeight="400"
              alignSelf="start"
              mt="8px"
            >
              /{currency}
            </Text>
          </>
        )}
      </Box>
      <Box
        className="actions-container"
        display="flex"
        flexDirection="column"
        fontSize="15px"
        color="rgba(44, 62, 80, 1)"
        lineHeight="1.6"
      >
        <ShareButtons isLoading={isLoading} />
        <Button
          variant="outline"
          isLoading={isLoading}
          leftIcon={
            isLoading ? (
              <Skeleton height="14px" width="14px" />
            ) : (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aa858373064b1cdf1dd578ff5eae01c115e97bc193cf3aca4e2b4b51af14a2d?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
                alt=""
                width="14px"
                height="14px"
              />
            )
          }
          alignSelf="flex-end"
          mt="15px"
          gap="11px"
          fontWeight="700"
          whiteSpace={{ base: 'initial', md: 'nowrap' }}
          textAlign="center"
          textTransform="uppercase"
          px="17px"
          py="13px"
          border="2px solid rgba(44, 62, 80, 1)"
        >
          {isLoading ? <Skeleton width="40px" /> : 'Print'}
        </Button>
      </Box>
    </Box>
  )
}

export default PriceInfo
