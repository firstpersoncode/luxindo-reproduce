import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useContextProvider } from '../libs/providers'
import { Box, Container, VStack } from '@chakra-ui/react'
import Title from './components/Title'
import PriceInfo from './components/PriceInfo'
import PropertyInfo from './components/PropertyInfo'
import Gallery from './components/Gallery'
import Video from './components/Video'
import Map from './components/Map'
import PropertyDetails from './components/PropertyDetails'
import Description from './components/Description'
import Agent from './components/Agent'
import Related from './components/Related'
import Amenities from './components/Amenities'

const Layout: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return (
    <Box bg="white">
      <Container maxW="container.xl">
        <Title />
        <PriceInfo />
        <Gallery />
        <Video />
        <PropertyInfo />
        <PropertyDetails />
        <Amenities />
        <Description />
        <Map />
        <VStack spacing={8} align="stretch">
          {sections.map((section: any) => (
            <MapSection key={section.id} {...section} />
          ))}
        </VStack>
        <Agent />
        <Related />
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
