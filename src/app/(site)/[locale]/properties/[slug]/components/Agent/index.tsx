import React from 'react'
import { Box, Flex, Image, Text, VStack, HStack, Skeleton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import AgentInfo from './AgentInfo'
import ContactDetails from './ContactDetails'
import { useContextProvider } from '../../libs/providers'

const ContactAgent: React.FC = () => {
  const {
    data: { agent },
    isLoading,
  } = useContextProvider()
  return (
    <Box>
      <Text
        color="rgba(44, 62, 80, 1)"
        fontSize="20px"
        fontWeight="600"
        lineHeight="1.1"
        fontFamily="Source Sans Pro, sans-serif"
      >
        Contact the Agent
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
          <AgentInfo isLoading={isLoading} />
          <ContactDetails isLoading={isLoading} />
        </Box>
      </Flex>
    </Box>
  )
}

export default ContactAgent
