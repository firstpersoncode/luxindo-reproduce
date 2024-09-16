import React from 'react'
import { HStack, VStack, Text, Skeleton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useContextProvider } from '../../providers'

interface ContactDetailsProps {
  isLoading: boolean
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ isLoading }) => {
  const {
    data: { agent },
  } = useContextProvider()
  return (
    <VStack
      marginTop="19px"
      spacing="48px"
      fontSize="15px"
      lineHeight="1.6"
      alignItems="flex-start"
    >
      {agent?.contacts?.map((c: any) => (
        <HStack key={c.id} color="rgba(44, 62, 80, 1)" fontWeight="400">
          <Skeleton isLoaded={!isLoading}>
            <Text>{c.title}</Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text>{c.value}</Text>
          </Skeleton>
        </HStack>
      ))}
    </VStack>
  )
}

export default ContactDetails
