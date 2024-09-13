import dynamic from 'next/dynamic'

const Components = dynamic(() => import('./components'))

export default async function Page() {
  return <Components />
}
