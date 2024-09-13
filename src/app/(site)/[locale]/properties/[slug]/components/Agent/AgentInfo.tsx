import React from 'react'
import { Box, Text, Skeleton } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useContextProvider } from '../../libs/providers'

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
      <Skeleton isLoaded={!isLoading}>
        <Box
          as="img"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/748f3db14ef647d0bb2787eac1ce4cb152e551b09951ee429055e056f12002dd?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
          alt=""
          position="absolute"
          inset="0"
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </Skeleton>
      <Text
        position="relative"
        color="rgba(52, 47, 44, 1)"
        fontSize="30px"
        fontWeight="600"
        lineHeight="1.1"
      >
        {agent?.name}
      </Text>
      <Text
        position="relative"
        color="rgba(44, 62, 80, 1)"
        fontSize="15px"
        fontWeight="400"
        lineHeight="1.6"
        marginTop="18px"
      >
        Senior Luxindo Agent
      </Text>
    </Box>
  )
}

export default AgentInfo
