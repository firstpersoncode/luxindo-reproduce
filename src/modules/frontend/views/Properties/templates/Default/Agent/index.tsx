import React from 'react'
import { Box, Flex, Image, Text, Skeleton, Container } from '@chakra-ui/react'
import { css } from '@emotion/react'
import AgentInfo from './AgentInfo'
import ContactDetails from './ContactDetails'
import { useContextProvider } from '../../../providers'

const ContactAgent: React.FC = () => {
  const {
    data: { agent },
    isLoading,
    getLocale,
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Text
          color="rgba(44, 62, 80, 1)"
          fontSize="20px"
          fontWeight="600"
          lineHeight="1.1"
        >
          {getLocale('Contact the Agent')}
        </Text>
        <Flex
          css={css`
            gap: 20px;
          `}
        >
          <Skeleton isLoaded={!isLoading}>
            {!!agent?.image?.url && (
              <Image
                src={agent.image.url}
                alt="Contact agent illustration"
                objectFit="contain"
                width="100%"
                css={css`
                  aspect-ratio: 1.04;
                `}
              />
            )}
          </Skeleton>
          <Box w="50%">
            <AgentInfo isLoading={isLoading as boolean} />
            <ContactDetails isLoading={isLoading as boolean} />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default ContactAgent
