import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const RichText: React.FC<{ content_html: string }> = ({ content_html }) => {
  return (
    <Box bg="white">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <div dangerouslySetInnerHTML={{ __html: content_html }} />
      </Container>
    </Box>
  )
}

export default RichText
