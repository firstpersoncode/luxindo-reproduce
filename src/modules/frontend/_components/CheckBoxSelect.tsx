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

import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons'
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
        <Flex flexDirection="column" flex={1}>
          {icon && (
            <Flex alignItems="start" gap="8px">
              <Image src={icon} alt="" width={16} height={16} />
              <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
                {label}
              </Text>
              {values.length > 0 && (
                <Tag size="sm" borderRadius="full" variant="solid">
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
                    <Tag borderRadius="full" variant="solid">
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
      <PopoverContent border="none" minW="250px">
        <PopoverArrow />
        <PopoverBody background="#000" p={0}>
          <Stack p="18px" mt={1} spacing={1} maxH="250px" overflowY="auto" gap="12px">
            {options.map((option, i) => (
              <Checkbox
                key={i}
                isChecked={values.includes(option)}
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
            // disabled={values.length === 0}
            variant="link"
            color="white"
            w="full"
            p="18px"
            textTransform="uppercase"
            leftIcon={
              <Box borderRadius="50%" border="1px solid white" p="5px">
                <CloseIcon display="block" w="10px" h="10px" />
              </Box>
            }
            onClick={() => onChange([])}
            fontSize="xs"
          >
            Clear
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default CheckBoxSelect
