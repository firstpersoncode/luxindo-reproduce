'use client'

import Title from './Title'
import PriceInfo from './PriceInfo'
import PropertyInfo from './PropertyInfo'
import Gallery from './Gallery'
import { useContextProvider } from '../libs/providers'
import Video from './Video'
import Map from './Map'
import PropertyDetails from './PropertyDetails'
import Description from './Description'
import Agent from './Agent'
import Related from './Related'
import { Container } from '@chakra-ui/react'

export default function Components() {
  const { data } = useContextProvider()
  return (
    <Container>
      <Title />
      <PriceInfo />
      <Gallery />
      <Video />
      <PropertyInfo />
      <PropertyDetails />
      <Description />
      <Map />
      <Agent />
      <Related />

      {data ? <pre style={{fontSize: "10px"}}>{JSON.stringify(data, null, 2)}</pre> : 'Property not found'}
    </Container>
  )
}
