import React from 'react'
import { useContextProvider } from '../../providers'

const RichText: React.FC<{ sectionId: string }> = ({ sectionId }) => {
  const {
    data: { sections },
  } = useContextProvider()
  const section = sections.find((section: any) => section.id === sectionId)

  return <div dangerouslySetInnerHTML={{ __html: section.content_html }} />
}

export default RichText
