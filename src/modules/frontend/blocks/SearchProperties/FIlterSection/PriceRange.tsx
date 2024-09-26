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
import { useContextProvider } from '../providers'

const PriceRange: React.FC = () => {
  const { getLocale, filter, setFilter } = useContextProvider()
  const min = 0
  const max = 10000000000
  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDirection="column" flex={1} minWidth="240px">
          <Flex alignItems="start" gap="8px">
            <Image src="/icons/sell.png" alt="PRICE RANGE" width={16} height={16} />
            <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
              {getLocale('Price Range')}
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
                filter.price_start > min || filter.price_end < max
                  ? [filter.price_start, filter.price_end]
                      .map((p) => Number(p).toLocaleString().replace(/,/g, '.'))
                      .join(' - ')
                  : getLocale('Any')
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
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <VStack spacing={4} align="stretch" width="100%">
            <HStack justifyContent="space-between">
              <Text fontSize="16px" fontWeight="400">
                {Number(filter.price_start ?? min).toLocaleString().replace(/,/g, '.')}
              </Text>

              <Text fontSize="16px" fontWeight="400">
                {Number(filter.price_end ?? max).toLocaleString().replace(/,/g, '.')}
              </Text>
            </HStack>
            <Flex>
              <RangeSlider
                value={[filter.price_start ?? min, filter.price_end ?? max]}
                min={min}
                max={max}
                step={1000000}
                onChange={(vals) => {
                  const [price_start, price_end] = vals
                  setFilter({ price_start, price_end })
                }}
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
