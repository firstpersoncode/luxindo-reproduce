import { Box, Heading, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box
      borderRadius="23px"
      position="relative"
      minH="250px"
      overflow="hidden"
      color="white"
      textAlign="center"
    >
      <Box
        as="img"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a257648eecfb03ec4e1d382a41ddf9c845e6525a7771fb74c130141381d2384a?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185"
        position="absolute"
        inset={0}
        h="100%"
        w="100%"
        objectFit="cover"
        objectPosition="center"
      />
      <Box position="relative" bg="rgba(29, 24, 22, 0.5)" p={{ base: 5, md: '67px 77px' }}>
        <Heading fontSize={{ base: '40px', md: '47px' }} fontWeight="700" lineHeight="1.2">
          Bali&lsquo;s property for sale
        </Heading>
        <Text fontSize="16px" fontWeight="400" lineHeight="24px" mt={2}>
          Discover your ideal Bali property: explore thousands of Bali property listings for sale!
          Search by property type (villas, ocean view, beachfront), budget, and desired features.
          Find your dream - off-plan properties for future investment or ready-move-in for immediate
          enjoyment. We simplify your Bali property search
        </Text>
      </Box>
    </Box>
  )
}
