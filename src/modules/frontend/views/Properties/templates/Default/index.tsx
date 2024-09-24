import { useContextProvider } from '../../providers'
import { useMemo } from 'react'
import { BLOCKS } from '@/modules/frontend/blocks'
import Title from './Title'
import PriceInfo from './PriceInfo'
import PropertyInfo from './PropertyInfo'
import Gallery from './Gallery'
import Video from './Video'
import Map from './Map'
import PropertyDetails from './PropertyDetails'
import Description from './Description'
import Agent from './Agent'
import Related from './Related'
import Amenities from './Amenities'
import { Text } from '@chakra-ui/react'

const Layout: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return (
    <>
      <Title />
      <PriceInfo />
      <Gallery />
      <Video />
      <PropertyInfo />
      <PropertyDetails />
      <Amenities />
      <Description />
      <Map />
      {sections.map((block: any) => (
        <MapBlock key={block.id} {...block} />
      ))}
      <Agent />
      <Related />
    </>
  )
}

export default Layout

function MapBlock({ ...block }: any) {
  return useMemo(() => {
    const Block = BLOCKS[block.blockType]
    if (!Block) return <Text>Block {block.blockType} Not found</Text>
    return <Block {...block} />
  }, [block])
}
