import { Box } from '@chakra-ui/react'
import { useContextProvider } from './providers'
import Image from '@/modules/frontend/_components/Image'
import Slider from 'react-slick'

const BannerSlider: React.FC = () => {
  const { images = [] } = useContextProvider()

  return (
    <>
      {images?.length > 0 && (
        <Box width="100%" height="100%" position="absolute" top={0} left={0}>
          <Slider
            {...{
              dots: false,
              arrows: false,
              fade: true,
              infinite: true,
              speed: 1000,
              slidesToShow: 1,
              slidesToScroll: 1,
              waitForAnimate: false,
              pauseOnHover: false,
              autoplay: true,
            }}
          >
            {images.map((image, index) => (
              <Box position="relative" key={index} maxW="100%" h="100vh">
                <Image
                  src={image.file.url}
                  alt={image.file.alt ?? 'Home Hero'}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </>
  )
}

export default BannerSlider
