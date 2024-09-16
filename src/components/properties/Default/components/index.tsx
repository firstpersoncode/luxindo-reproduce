import Title from './Title'
import PriceInfo from './PriceInfo'
import PropertyInfo from './PropertyInfo'
import Gallery from './Gallery'
import Video from './Video'
import Map from './Map'
import PropertyDetails from './PropertyDetails'
import Description from './Description'
import Agent from './Agent'
import Related from './Related'
import { Container } from '@chakra-ui/react'
import Amenities from './Amenities'

export default function Components() {
  return (
    <Container>
      <Title />
      <PriceInfo />
      <Gallery />
      <Video />
      <PropertyInfo />
      <PropertyDetails />
      <Amenities />
      <Description />
      <Map />
      <Agent />
      <Related />
    </Container>
  )
}
