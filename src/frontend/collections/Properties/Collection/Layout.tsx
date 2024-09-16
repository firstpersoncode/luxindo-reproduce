import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useContextProvider } from '../libs/providers'
import { Box, Container, VStack } from '@chakra-ui/react'
import Banner from './components/Banner'
import PopularAreas from './components/PopularAreas'
import FAQSection from './components/FAQSection'

const Layout: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Banner />
          <VStack spacing={8} align="stretch">
            {sections.map((section: any) => (
              <MapSection key={section.id} {...section} />
            ))}
          </VStack>
          <PopularAreas />
          <FAQSection />
        </VStack>
      </Container>
    </Box>
  )
}

export default Layout

const sections: { [x: string]: any } = {
  RichText: dynamic(() => import('@/frontend/collections/blocks/RichText')),
  SearchCollection: dynamic(() => import('@/frontend/collections/blocks/SearchCollection')),
}

function MapSection({ ...block }: any) {
  const Section = useMemo(() => {
    const Block = sections[block.blockType ?? 'default']
    return Block
  }, [block.blockType])
  const { locale } = useContextProvider()

  return <Section locale={locale} {...block} />
}
