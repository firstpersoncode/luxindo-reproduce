import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Input,
  VStack,
  Text,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  HStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MAX_PRICE, MIN_PRICE } from '@/modules/options'

const PriceRange: React.FC<{
  label: string
  placeholder: string
  start: number
  end: number
  step: number
  onChange: (_: number[]) => void
}> = ({ label, placeholder, start, end, step, onChange }) => {
  const min = MIN_PRICE
  const max = MAX_PRICE

  return (
    <Popover>
      <PopoverTrigger>
        <Flex
          flexDirection="column"
          flexGrow={1}
        >
          <Flex alignItems="start" gap="8px">
            <Image src="/icons/sell.png" alt="PRICE RANGE" width={16} height={16} />
            <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
              {label}
            </Text>
          </Flex>
          <Flex
            marginTop="16px"
            flexDirection="column"
            fontSize="12px"
            fontWeight={400}
            position="relative"
          >
            <Input
              variant="flushed"
              readOnly
              value={
                start > min || end < max
                  ? [start, end]
                      .map((p) => Number(p).toLocaleString().replace(/,/g, '.'))
                      .join(' - ')
                  : placeholder
              }
            />

            <ChevronDownIcon
              position="absolute"
              right={0}
              bottom="8px"
              width="20px"
              height="20px"
            />
          </Flex>
        </Flex>
      </PopoverTrigger>
      <PopoverContent border="none" minW={{ base: '100vw', md: '500px' }}>
        <PopoverArrow />
        <PopoverBody background="brand.background" p="18px">
          <VStack spacing={4} align="stretch" width="100%">
            <HStack gap="8px">
              <Text color="white" fontSize="16px" fontWeight="400">
                from{' '}
                {Number(start ?? min)
                  .toLocaleString()
                  .replace(/,/g, '.')}
              </Text>

              <Text color="white" fontSize="16px" fontWeight="400">
                to{' '}
                {Number(end ?? max)
                  .toLocaleString()
                  .replace(/,/g, '.')}
              </Text>
            </HStack>
            <Flex>
              <RangeSlider
                value={[start ?? min, end ?? max]}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                colorScheme="primary"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Flex>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PriceRange
