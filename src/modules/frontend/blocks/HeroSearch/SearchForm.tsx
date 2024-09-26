import React from 'react'
import { Flex, Text, Input, Select, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useContextProvider } from './providers'
import { LOCATIONS, PROPERTY_OWNERSHIP, PROPERTY_TYPES } from '@/options'
import PriceRange from './PriceRange'

interface SearchFieldProps {
  icon?: string
  label: string
  placeholder?: string
  isSelect?: boolean
  options?: string[]
  onChange?: (e: React.ChangeEvent<any>) => void
}

const SearchField: React.FC<SearchFieldProps> = ({
  icon,
  label,
  placeholder,
  isSelect,
  options,
  onChange
}) => (
  <Flex flexDirection="column" width="177px">
    <Flex alignItems="start" gap="8px">
      {icon && <Image src={icon} alt={label} width={16} height={16} />}
      <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
        {label}
      </Text>
    </Flex>
    <Flex marginTop="16px" flexDirection="column" fontSize="12px" fontWeight={400}>
      {isSelect ? (
        <Select variant="flushed" placeholder={placeholder} onChange={onChange}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <Input variant="flushed" placeholder={placeholder} onChange={onChange} />
      )}
    </Flex>
  </Flex>
)

const SearchForm: React.FC = () => {
  const { cta, getLocale, handleSearch, setFilter } = useContextProvider()
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
          label={getLocale('REF. NO')}
          placeholder={getLocale('e.g. RV392')}
          onChange={e => setFilter({ sku: e.target.value })}
        />
        <SearchField
          icon="/icons/location_on.png"
          label={getLocale('Location')}
          placeholder={getLocale('Any')}
          isSelect
          options={LOCATIONS.map((l) => l.value)}
          onChange={e => setFilter({ area_1: e.target.value })}
        />
        <SearchField
          icon="/icons/home_work.png"
          label={getLocale('Type')}
          placeholder={getLocale('Any')}
          isSelect
          options={PROPERTY_TYPES.map((t) => t.value)}
          onChange={e => setFilter({ type: e.target.value })}
        />
        <SearchField
          icon="/icons/key.png"
          label={getLocale('Ownership')}
          placeholder={getLocale('Any')}
          isSelect
          options={PROPERTY_OWNERSHIP.map((o) => o.value)}
          onChange={e => setFilter({ ownership: e.target.value })}
        />
        {/* <Flex flexDirection="column" flex={1} minWidth="240px">
          <Flex alignItems="start" gap="8px">
            <Image src="/icons/sell.png" alt="PRICE RANGE" width={16} height={16} />
            <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
              {getLocale('Price Range')}
            </Text>
          </Flex>
          <Flex marginTop="16px" flexDirection="column" fontSize="12px" fontWeight={400}>
            <Select variant="flushed" placeholder={getLocale('Any')}>
            </Select>
          </Flex>
        </Flex> */}
        <PriceRange />
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
        onClick={handleSearch}
      >
        <Image src="/icons/search.png" alt="Search" width={24} height={24} />
        <Text display={{ base: 'none', md: 'block' }} textTransform="uppercase">
          {cta ?? getLocale('Search')}
        </Text>
        <Text display={{ base: 'block', md: 'none' }} textTransform="uppercase">
          {cta ?? getLocale('Search Property')}
        </Text>
      </Button>
    </Flex>
  )
}

export default SearchForm
