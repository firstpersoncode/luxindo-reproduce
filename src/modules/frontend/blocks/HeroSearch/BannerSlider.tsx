import { Box } from '@chakra-ui/react'
import { useContextProvider } from './providers'
import Image from 'next/image'
import Slider from 'react-slick'
import { useMemo } from 'react'

const BannerSlider: React.FC = () => {
  const { images = [] } = useContextProvider()

  const hydratedImages = useMemo(() => {
    if (!images?.length) return []
    const banner = images.filter((i) => !!i.file?.url)

    return banner.map((image: any) => {
      const isAbsolutePath = image.file.url.startsWith('http')
      const url = isAbsolutePath
        ? image.file.url
        : `${process.env.NEXT_PUBLIC_APP_URL}${image.file.url}`
      return {
        file: { url, alt: image.file.alt },
      }
    })
  }, [images])

  return (
    <>
      {hydratedImages?.length > 0 && (
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
            {hydratedImages.map((image, index) => (
              <Box position="relative" key={index} maxW="100%" pb={{ base: '220%', md: '56%' }}>
                <Image
                  src={image.file.url}
                  alt={image.file.alt ?? 'Home Hero'}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Slider>
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="black"
            opacity={0.75}
          />
        </Box>
      )}
    </>
  )
}

export default BannerSlider
