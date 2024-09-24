import React from 'react'
import { Box, Heading, Text, VStack, Skeleton, Container } from '@chakra-ui/react'
import { useContextProvider } from '../../providers'

const DescriptionSection: React.FC = ({}) => {
  const {
    data: { descriptions_html },
    isLoading,
    getLocale
  } = useContextProvider()

  return (
    <Box bg="white" as="section">
      <Container maxW="container.xl">
        <Box
          flexGrow={1}
          color="rgba(96, 110, 124, 1)"
          fontFamily="Source Sans Pro, sans-serif"
          fontSize="15px"
          lineHeight="21px"
        >
          <Skeleton isLoaded={!isLoading}>
            <Heading
              as="h2"
              color="rgba(44, 62, 80, 1)"
              fontSize="20px"
              fontWeight="600"
              lineHeight="1.1"
              mb="35px"
            >
              {getLocale("Description")}
            </Heading>
          </Skeleton>

          <VStack spacing="20px" align="start">
            <Skeleton isLoaded={!isLoading}>
              <div dangerouslySetInnerHTML={{ __html: descriptions_html as string }} />
            </Skeleton>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default DescriptionSection
