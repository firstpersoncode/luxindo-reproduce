import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Input,
  Text,
  Flex,
  Stack,
  Checkbox,
  Tag,
  TagLabel,
  TagCloseButton,
  Box,
  Divider,
  Button,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const CheckBoxSelect: React.FC<{
  icon?: string
  label: string
  placeholder?: string
  options: string[]
  values: string[]
  onChange: any
}> = ({ icon, label, placeholder, options, values = [], onChange }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Flex
          mb="18px"
          flexDirection="column"
          flexGrow={1}
          width={{ base: 'full', md: 'full', lg: 'auto' }}
        >
          {icon && (
            <Flex alignItems="start" gap="8px">
              <Image src={icon} alt="" width={16} height={16} />
              <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
                {label}
              </Text>
              {values.length > 0 && (
                <Tag size="sm" borderRadius="full" variant="solid" bgColor="red">
                  <TagLabel fontSize="xs">{values.length}</TagLabel>
                </Tag>
              )}
            </Flex>
          )}
          <Flex
            marginTop="16px"
            flexDirection="column"
            fontSize="12px"
            fontWeight={400}
            position="relative"
          >
            <Input variant="flushed" readOnly value={values.length ? '' : placeholder} />

            {values.length > 0 && (
              <Box
                display="flex"
                position="absolute"
                left={0}
                bottom="8px"
                w="85%"
                overflowX="auto"
                gap="8px"
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                  '-ms-overflow-style': 'none',
                  'scrollbar-width': 'none',
                }}
              >
                {values.map((item, i) => (
                  <Box as="span" key={i}>
                    <Tag bgColor="brand.primary" borderRadius="full" variant="solid">
                      <TagLabel fontSize="xs">{item}</TagLabel>
                      <TagCloseButton
                        onClick={(e) => {
                          e.stopPropagation()
                          onChange(values.filter((s) => s !== item))
                        }}
                      />
                    </Tag>
                  </Box>
                ))}
              </Box>
            )}

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
      <PopoverContent border="none" minW={{ base: '90vw', md: '80vw', lg: '200px' }}>
        <PopoverArrow />
        <PopoverBody background="brand.background" p={0}>
          <Stack p="18px" mt={1} maxH="250px" overflowY="auto" gap="18px">
            {options.map((option, i) => (
              <Checkbox
                key={i}
                isChecked={values.includes(option)}
                colorScheme="primary"
                onChange={() => {
                  const currValues = [...values]
                  if (currValues.includes(option)) {
                    onChange(currValues.filter((item) => item !== option))
                  } else {
                    onChange([...currValues, option])
                  }
                }}
              >
                <Text fontSize="xs">{option}</Text>
              </Checkbox>
            ))}
          </Stack>
          <Divider />
          <Button
            variant="link"
            w="full"
            p="18px"
            onClick={() => onChange([])}
            fontSize="xs"
            gap="4px"
          >
            <Box w="20px" h="20px" position="relative">
              <Image src="/icons/cancel.png" alt="Clear" fill />
            </Box>
            <Text color="white" textTransform="uppercase">
              Clear
            </Text>
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default CheckBoxSelect
