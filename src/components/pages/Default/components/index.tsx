import React from 'react'
import dynamic from 'next/dynamic'
import { useContextProvider } from '../providers'

const Components: React.FC = () => {
  const {
    data: { sections = [] },
  } = useContextProvider()

  return sections.map((section: any) => (
    <Sections key={section.id} {...section} />
  ))
}

export default Components

const sections: { [x: string]: any } = {
  RichText: dynamic(() => import('./RichText')),
}

function Sections({ ...block }: any) {
  const Section = sections[block.blockType ?? 'default']
  return <Section sectionId={block.id} />
}
