'use client'

import { useContextProvider } from '../libs/providers'

export default function Components() {
  const { data } = useContextProvider()
  return <>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Property not found'}</>
}
