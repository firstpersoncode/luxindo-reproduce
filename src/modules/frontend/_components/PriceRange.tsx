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
  Box,
} from '@chakra-ui/react'
import Image from '@/modules/frontend/_components/Image'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MAX_PRICE, MIN_PRICE } from '@/modules/options'
import { MdGraphicEq } from 'react-icons/md'

const PriceRange: React.FC<{
  icon?:string
  label: string
  placeholder: string
  start: number
  end: number
  step: number
  onChange: (_: number[]) => void
}> = ({ icon, label, placeholder, start, end, step, onChange }) => {
  const min = MIN_PRICE
  const max = MAX_PRICE

  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <Flex alignItems="start" gap="8px">
            {icon && <Image src={icon} alt="PRICE RANGE" width={16} height={16} />}
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
        </Box>
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
              >
                <RangeSliderTrack bg="brand.secondary">
                  <RangeSliderFilledTrack bg="brand.primary" />
                </RangeSliderTrack>
                <Steps />
                <RangeSliderThumb position="relative" zIndex={3} boxSize={6} index={0}>
                  <Box color="brand.primary" as={MdGraphicEq} />
                </RangeSliderThumb>
                <RangeSliderThumb position="relative" zIndex={3} boxSize={6} index={1}>
                  <Box color="brand.primary" as={MdGraphicEq} />
                </RangeSliderThumb>
              </RangeSlider>
            </Flex>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PriceRange

function Steps() {
  return (
    <HStack spacing={0} width="100%" justify="space-between" position="relative" zIndex={2}>
      {Array.from({ length: 11 }).map((_, index) => (
        <Box key={index} width="1px" height="10px" background="brand.primary" />
      ))}
    </HStack>
  )
}
