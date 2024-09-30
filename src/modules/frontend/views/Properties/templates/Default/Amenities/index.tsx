import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import ArchitectureList from './List'
import Title from './Title'

const ArchitectureSection: React.FC = () => {
  return (
    <Box bg="white">
      <Container px={{ base: '24px', md: '48px' }} maxW="container.xl">
        <Title />
        <ArchitectureList />
      </Container>
    </Box>
  )
}

export default ArchitectureSection
