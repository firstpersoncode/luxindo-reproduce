import { Box, Flex, Image, Text, VStack, SimpleGrid, Container } from '@chakra-ui/react'
import PropertyFeature from './PropertyFeature'
import PropertyStat from './PropertyStat'
import { useContextProvider } from '../../../providers'

const PropertyDetails: React.FC = ({}) => {
  const {
    data: { plans, spaces },
    getLocale
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Text fontSize="20px" fontWeight="600" lineHeight="1.1" mt="34px">
          {getLocale('The space')}
        </Text>

        <VStack ml={{ base: 0, md: '20px' }} align="stretch">
          <SimpleGrid columns={3} spacing={4}>
            {plans?.map((plan: any) => (
              <PropertyFeature
                key={plan.id}
                icon={
                  plan.icon?.url ?? undefined}
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
