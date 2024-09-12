'use client'

import Title from './Title'
import PriceInfo from './PriceInfo'
import PropertyInfo from './PropertyInfo'
import Gallery from './Gallery'
import { useContextProvider } from '../libs/providers'
import Video from './Video'
import Map from './Map'

export default function Components() {
  const { data } = useContextProvider()
  return (
    <>
      <Title />
      <PriceInfo />
      <Gallery />
      <PropertyInfo />
      <Video />
      <Map />

      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Property not found'}
    </>
  )
}
