import React from 'react'
import { VStack, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

interface FooterSectionProps {
  title: string
  items: string[]
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <VStack align="flex-start" spacing={8}>
      <Text color="rgba(193, 162, 131, 1)" textTransform="uppercase" fontSize="24px">
        {title}
      </Text>
      {items.length > 0 && (
        <VStack align="flex-start" spacing={6} maxW="200px">
          {items.map((item: any, index: number) =>
            item.value !== '#' ? (
              <Link key={index} href={item.value}>
                <Button variant="link" color="white" minW={0}>
                  <Text fontSize="14px">{item.title}</Text>
                </Button>
              </Link>
            ) : (
              <Text key={index} color="white" fontSize="14px">
                {item.title}
              </Text>
            ),
          )}
        </VStack>
      )}
    </VStack>
  )
}

export default FooterSection
