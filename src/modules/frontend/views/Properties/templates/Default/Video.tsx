import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { useContextProvider } from '../../providers'

const Video: React.FC = () => {
  const {
    isLoading,
    data: { video },
  } = useContextProvider()

  return (
    <Box bg="white" as="header">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Box textAlign="left" p="20px" maxW={{ base: '100%' }}>
          <iframe
            width="560"
            height="315"
            src={video as string}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Video
