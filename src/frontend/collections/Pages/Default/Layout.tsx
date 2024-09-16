import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useContextProvider } from '../libs/providers'
import { Box, Container, VStack } from '@chakra-ui/react'

const Layout: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {sections.map((section: any) => (
            <MapSection key={section.id} {...section} />
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Layout

const sections: { [x: string]: any } = {
  RichText: dynamic(() => import('@/frontend/collections/blocks/RichText')),
}

function MapSection({ ...block }: any) {
  const Section = useMemo(() => {
    const Block = sections[block.blockType ?? 'default']
    return Block
  }, [block.blockType])
  return <Section {...block} />
}
