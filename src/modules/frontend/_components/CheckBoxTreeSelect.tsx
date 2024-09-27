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
  HStack,
} from '@chakra-ui/react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon, MinusIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Option {
  label: string
  value: string
  children?: { label: string; value: string }[]
}

const CheckBoxTreeSelect: React.FC<{
  icon?: string
  label: string
  placeholder?: string
  options: Option[]
  values: string[]
  subValues: string[]
  onChange: any
}> = ({ icon, label, placeholder, options, values = [], subValues = [], onChange }) => {
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
                          const option = options.find((o) => o.value === item)
                          const children = option?.children?.map((child) => child.value) ?? []
                          onChange({
                            values: values.filter((s) => s !== item),
                            subValues: subValues.filter((s) => !children.includes(s)),
                          })
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
      <PopoverContent border="none" minW={{ base: '90vw', md: '80vw', lg: '50vw' }}>
        <PopoverArrow />
        <PopoverBody background="brand.background" p={0}>
          <HStack
            flexWrap="wrap"
            alignItems="flex-start"
            p="18px"
            mt={1}
            maxH="400px"
            overflowY="auto"
            gap="18px"
            flexDirection={{ base: 'row', md: 'row', lg: 'row' }}
          >
            {options.map((option, i) => (
              <Option
                key={i}
                option={option}
                values={values}
                subValues={subValues}
                onChange={onChange}
              />
            ))}
          </HStack>
          <Divider />
          <Button
            variant="link"
            w="full"
            p="18px"
            onClick={() => onChange({ values: [], subValues: [] })}
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

export default CheckBoxTreeSelect

function Option({
  option,
  values = [],
  subValues = [],
  onChange,
}: {
  option: Option
  values: string[]
  subValues: string[]
  onChange: any
}) {
  const [isOpen, setIsOpen] = useState(false)
  const isSelected = !!values.length && values.includes(option.value)
  const hasChildren = option.children && option.children.length > 0
  const childrenSelectedAll =
    !hasChildren || option.children?.every((child) => subValues.includes(child.value))
  useEffect(() => {
    if (values.length && values.includes(option.value)) {
      setIsOpen(true)
    }
  }, [values, option.value])
  return (
    <Box w={{ base: '100%', md: '100%', lg: '200px' }}>
      <HStack gap="8px" alignItems="center">
        {hasChildren && (
          <>
            {isOpen ? (
              <ChevronUpIcon
                onClick={() => setIsOpen(false)}
                cursor="pointer"
                w="20px"
                h="20px"
                color="white"
              />
            ) : (
              <ChevronDownIcon
                onClick={() => setIsOpen(true)}
                cursor="pointer"
                w="20px"
                h="20px"
                color="white"
              />
            )}
          </>
        )}

        <Checkbox
          icon={isSelected ? childrenSelectedAll ? <CheckIcon /> : <MinusIcon /> : undefined}
          ml={hasChildren ? '0' : '28px'}
          isChecked={!!values.length && values.includes(option.value)}
          colorScheme="primary"
          onChange={() => {
            let currValues = [...values]
            let currSubValues = [...subValues]
            if (currValues.includes(option.value)) {
              const children = option.children?.map((child) => child.value) ?? []
              onChange({
                values: currValues.filter((item) => item !== option.value),
                subValues: currSubValues.filter((item) => !children.includes(item)),
              })
            } else {
              const children = option.children?.map((child) => child.value) ?? []
              onChange({
                values: [...currValues, option.value],
                subValues: [...currSubValues, ...children],
              })
            }
          }}
        >
          <Text fontSize="xs">{option.label}</Text>
        </Checkbox>
      </HStack>

      {hasChildren && isOpen && (
        <Stack mt="12px" ml="50px" gap="12px">
          {option.children?.map((child, i) => (
            <Checkbox
              key={i}
              isChecked={subValues.includes(child.value)}
              colorScheme="primary"
              onChange={() => {
                let currValues = [...values]
                let currSubValues = [...subValues]
                if (currSubValues.includes(child.value)) {
                  const siblings =
                    option.children
                      ?.filter((item) => item.value !== child.value)
                      .filter((item) => currSubValues.includes(item.value))
                      .map((item) => item.value) ?? []

                  onChange({
                    values: !siblings.length
                      ? currValues.filter((item) => item !== option.value)
                      : currValues,
                    subValues: currSubValues.filter((item) => item !== child.value),
                  })
                } else {
                  onChange({
                    values: currValues.includes(option.value)
                      ? currValues
                      : [...currValues, option.value],
                    subValues: [...currSubValues, child.value],
                  })
                }
              }}
            >
              <Text fontSize="xs">{child.label}</Text>
            </Checkbox>
          ))}
        </Stack>
      )}
    </Box>
  )
}
