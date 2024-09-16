import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useContextProvider } from '../../providers'
import { Box, Container, VStack } from '@chakra-ui/react'

const Components: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {sections.map((section: any) => (
            <Sections key={section.id} {...section} />
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Components

const sections: { [x: string]: any } = {
  RichText: dynamic(() => import('./RichText')),
}

function Sections({ ...block }: any) {
  const Section = useMemo(() => {
    const Block = sections[block.blockType ?? 'default']
    return Block
  }, [block.blockType])
  return <Section sectionId={block.id} />
}
