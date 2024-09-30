import NextImage from 'next/image'

export default function Image(props: any) {
  return (
    <NextImage {...props} unoptimized={['prod', 'production'].includes(process.env.NODE_ENV)} />
  )
}
