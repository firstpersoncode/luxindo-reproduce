import React from 'react'

const RichText: React.FC<{ content_html: string }> = ({ content_html }) => {
  return <div dangerouslySetInnerHTML={{ __html: content_html }} />
}

export default RichText
