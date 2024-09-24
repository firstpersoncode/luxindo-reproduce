'use client'

import { useField } from '@payloadcms/ui'
import dynamic from 'next/dynamic'
// import
const ReactQuill = dynamic(() => import('./Editor').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <p>Loading Text Editor...</p>,
})

const RichTextField: React.FC<{ path: string; label: string }> = ({ path, label }) => {
  const { value, setValue } = useField<string>({ path })
  return (
    <div style={{ marginBottom: '18px' }}>
      <label className="field-label">{label}</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(v: any) => {
          const cleanedValue = v
            .replace(/<[^>]+>/g, '')
            .replace(/\s+/g, '')
            .trim()
          const isEmpty = !cleanedValue
          setValue(isEmpty ? '' : v)
        }}
      />
    </div>
  )
}

export default RichTextField
