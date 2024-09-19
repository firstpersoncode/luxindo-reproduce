import { useContextProvider } from '../../providers'
import { useMemo } from 'react'
import { BLOCKS } from '@/modules/Property/frontend/blocks'
import { Text } from '@chakra-ui/react'

const Layout: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return sections.map((block: any) => <MapBlock key={block.id} {...block} />)
}

export default Layout

function MapBlock({ ...block }: any) {
  return useMemo(() => {
    const Block = BLOCKS[block.blockType]
    if (!Block) return <Text>Block {block.blockType} Not found</Text>
    return <Block {...block} />
  }, [block])
}