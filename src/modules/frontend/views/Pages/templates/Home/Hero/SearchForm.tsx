import React from 'react'
import { Flex, Text, Input, Select, Button } from '@chakra-ui/react'
import Image from 'next/image'

interface SearchFieldProps {
  icon?: string
  label: string
  placeholder?: string
  isSelect?: boolean
  options?: string[]
}

const SearchField: React.FC<SearchFieldProps> = ({
  icon,
  label,
  placeholder,
  isSelect,
  options,
}) => (
  <Flex flexDirection="column" width="177px">
    <Flex alignItems="start" gap="8px" fontSize="12px" fontWeight={500} textTransform="uppercase">
      {icon && <Image src={icon} alt={label} width={16} height={16} />}
      <Text>{label}</Text>
    </Flex>
    <Flex marginTop="16px" flexDirection="column" fontSize="12px" fontWeight={400}>
      {isSelect ? (
        <Select variant="flushed" placeholder="Any">
          {/* {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))} */}
        </Select>
      ) : (
        <Input variant="flushed" placeholder={placeholder} />
      )}
    </Flex>
  </Flex>
)

const SearchForm: React.FC = () => {
  return (
    <Flex as="form" flexDirection="column" marginTop={{ base: '18px', md: '64px' }} width="100%">
      <Flex
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        gap="24px"
        color="white"
        flexWrap="wrap"
      >
        <SearchField
          icon="/icons/quick_reference_all.png"
          label="REF. NO"
          placeholder="e.g. RV392"
        />
        <SearchField icon="/icons/location_on.png" label="LOCATION" isSelect />
        <SearchField icon="/icons/home_work.png" label="TYPE" isSelect />
        <SearchField icon="/icons/key.png" label="OWNERSHIP" isSelect />
        <Flex flexDirection="column" flex={1} minWidth="240px">
          <Flex
            alignItems="start"
            gap="8px"
            fontSize="12px"
            fontWeight={500}
            textTransform="uppercase"
          >
            <Image src="/icons/sell.png" alt="PRICE RANGE" width={16} height={16} />
            <Text>PRICE RANGE</Text>
          </Flex>
          <Flex marginTop="16px" flexDirection="column" fontSize="12px" fontWeight={400}>
            <Select variant="flushed" placeholder="Any">
              {/* <option value="0-500000000">0 - 500,000,000 IDR</option>
              <option value="500000000-1000000000">500,000,000 - 1,000,000,000 IDR</option>
              <option value="1000000000+">1,000,000,000+ IDR</option> */}
            </Select>
          </Flex>
        </Flex>
      </Flex>
      <Button
        alignSelf={{ base: 'flex-start', md: 'flex-end' }}
        marginTop={{ base: '18px', md: '32px' }}
        backgroundColor="rgba(193, 162, 131, 1)"
        color="white"
        fontSize="24px"
        fontWeight={600}
        padding="8px 16px"
        gap="12px"
      >
        <Image src="/icons/search.png" alt="Search" width={24} height={24} />
        <Text display={{ base: 'none', md: 'block' }}>SEARCH</Text>
        <Text display={{ base: 'block', md: 'none' }}>SEARCH PROPERTY</Text>
      </Button>
    </Flex>
  )
}

export default SearchForm
