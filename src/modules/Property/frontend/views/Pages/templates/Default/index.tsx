import { useContextProvider } from '../../providers'
import { useMemo } from 'react'
import { BLOCKS } from '@/modules/Property/frontend/blocks'

const Layout: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return sections.map((block: any) => <MapBlock key={block.id} {...block} />)
}

export default Layout

function MapBlock({ ...block }: any) {
  return useMemo(() => {
    const Block = BLOCKS[block.blockType ?? 'default']
    return <Block {...block} />
  }, [block])
}
