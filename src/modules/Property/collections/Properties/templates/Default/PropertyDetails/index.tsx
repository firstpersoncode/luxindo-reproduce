import { Box, Flex, Image, Text, VStack, SimpleGrid, Container } from '@chakra-ui/react'
import PropertyFeature from './PropertyFeature'
import PropertyStat from './PropertyStat'
import { useContextProvider } from '../../../providers'
import { useContextProvider as useGlobalContextProvider } from '@/modules/Property/globals/providers'

const PropertyDetails: React.FC = ({}) => {
  const {
    data: { plans, spaces },
  } = useContextProvider()

  const { getLocale } = useGlobalContextProvider()

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <Text fontSize="20px" fontWeight="600" lineHeight="1.1" mt="34px">
          {getLocale('The space')}
        </Text>

        <VStack ml={{ base: 0, md: '20px' }} align="stretch">
          <SimpleGrid columns={3} spacing={4}>
            {plans?.map((plan: any) => (
              <PropertyFeature
                key={plan.id}
                icon={
                  plan.icon?.url ??
                  (plan.icon_placeholder
                    ? undefined
                    : 'https://cdn.builder.io/api/v1/image/assets/TEMP/e22eb4ee629417234d3b89a10d8ab13fca6f565834c0f4bdff254032783dec58?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185')
                }
                icon_placeholder={plan.icon_placeholder}
                label={plan.title}
                value={plan.value}
              />
            ))}
          </SimpleGrid>
        </VStack>

        <Flex
          mt={{ base: '40px', md: '91px' }}
          w="100%"
          fontSize="15px"
          fontWeight="400"
          lineHeight="24px"
        >
          {spaces?.map((plan: any) => (
            <PropertyStat key={plan.id} label={plan.title} value={plan.value} />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default PropertyDetails
