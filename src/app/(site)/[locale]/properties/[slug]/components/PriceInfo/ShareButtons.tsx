import React from 'react'
import Image from 'next/image'
import { Box, HStack, Text } from '@chakra-ui/react'

interface ShareButtonsProps {
  isLoading?: boolean
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ isLoading = false }) => {
  const shareIcons = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17d07e53cfad636b12551e47a9867d7f445536c23310a82f2c26bb2b3588e1e8?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185',
      alt: 'Share on social media',
      width: 12,
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f490791ee791d210bf82365ad747a4b759f48a87e31bcc22a73592ea221eb6e?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185',
      alt: 'Share on social media',
      width: 18,
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf1ff88f52777cc14ac59601830bd11458814ba27694d2fe1ade9cbf79b576?placeholderIfAbsent=true&apiKey=a9b95505e95b4a99931826297eec4185',
      alt: 'Share on social media',
      width: 26,
    },
  ]

  return (
    <HStack>
      <Text>Share this:</Text>
      {shareIcons.map((icon, index) => (
        <Box key={index}h="20px" w="20px" position="relative">
          <Image src={icon.src} alt={icon.alt} fill className="object-cover" />
        </Box>
      ))}
    </HStack>
  )
}

export default ShareButtons
