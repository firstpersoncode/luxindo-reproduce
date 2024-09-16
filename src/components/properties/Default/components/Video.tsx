import React from 'react'
import { Box } from '@chakra-ui/react'
import { useContextProvider } from '../../providers'

const Video: React.FC = () => {
  const {
    isLoading,
    data: { video },
  } = useContextProvider()

  return (
    <Box as="header" textAlign="left" p="20px" maxW={{ base: '100%' }}>
      <iframe
        width="560"
        height="315"
        src={video as string}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </Box>
  )
}

export default Video
