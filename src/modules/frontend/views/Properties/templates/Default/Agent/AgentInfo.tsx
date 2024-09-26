import React from 'react'
import { Box, Text, Skeleton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useContextProvider } from '../../../providers'

interface AgentInfoProps {
  isLoading: boolean
}

const AgentInfo: React.FC<AgentInfoProps> = ({ isLoading }) => {
  const {
    data: { agent },
  } = useContextProvider()
  return (
    <Box
      position="relative"
      minHeight="85px"
      width="580px"
      padding="9px 80px 17px 0"
      css={css`
        @media (max-width: 991px) {
          max-width: 100%;
          padding-right: 20px;
        }
      `}
    >
      <Text
        position="relative"
        color="rgba(52, 47, 44, 1)"
        fontSize="30px"
        fontWeight="600"
        lineHeight="1.1"
      >
        {agent?.name}
      </Text>
    </Box>
  )
}

export default AgentInfo
