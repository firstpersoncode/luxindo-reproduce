'use client'
import 'react-quill-new/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

export const Editor = (props: any) => {
  return <ReactQuill {...props} />
}
