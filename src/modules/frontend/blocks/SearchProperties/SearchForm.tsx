import React from 'react'
import { Flex, Text, Input, Select, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useContextProvider } from './providers'
import { LOCATIONS, PROPERTY_OWNERSHIP, PROPERTY_TYPES } from '@/options'
import PriceRange from '@/modules/frontend/_components/PriceRange'
import CheckBoxSelect from '@/modules/frontend/_components/CheckBoxSelect'

interface SearchFieldProps {
  icon?: string
  label: string
  placeholder?: string
  isSelect?: boolean
  options?: string[]
  value: string | string[]
  onChange?: (e: React.ChangeEvent<any>) => void
}

const SearchField: React.FC<SearchFieldProps> = ({
  icon,
  label,
  placeholder,
  isSelect,
  options,
  value,
  onChange,
}) => (
  <Flex flexDirection="column" width="177px">
    {isSelect ? (
      <CheckBoxSelect
        icon={icon}
        label={label}
        placeholder={placeholder}
        options={options ?? []}
        values={value as string[]}
        onChange={onChange}
      />
    ) : (
      <Flex flexDirection="column" flex={1}>
        {icon && (
          <Flex alignItems="start" gap="8px">
            <Image src={icon} alt="" width={16} height={16} />
            <Text fontSize="12px" fontWeight={500} textTransform="uppercase">
              {label}
            </Text>
          </Flex>
        )}
        <Flex
          marginTop="16px"
          flexDirection="column"
          fontSize="12px"
          fontWeight={400}
          position="relative"
          overflow="hidden"
        >
          <Input
            variant="flushed"
            value={value as string}
            placeholder={placeholder}
            onChange={onChange}
          />
        </Flex>
      </Flex>
    )}
  </Flex>
)

const SearchForm: React.FC = () => {
  const { getLocale, handleSearch, filter, setFilter } = useContextProvider()
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
          value={filter.sku}
          onChange={(e) => setFilter({ sku: e.target.value })}
        />
        <SearchField
          icon="/icons/location_on.png"
          label={getLocale('Location')}
          placeholder={getLocale('Any')}
          isSelect
          value={filter.area_1}
          options={LOCATIONS.map((l) => l.value)}
          onChange={(items) => setFilter({ area_1: items })}
        />
        <SearchField
          icon="/icons/home_work.png"
          label={getLocale('Type')}
          placeholder={getLocale('Any')}
          isSelect
          value={filter.type}
          options={PROPERTY_TYPES.map((t) => t.value)}
          onChange={(items) => setFilter({ type: items })}
        />
        <SearchField
          icon="/icons/key.png"
          label={getLocale('Ownership')}
          placeholder={getLocale('Any')}
          isSelect
          value={filter.ownership}
          options={PROPERTY_OWNERSHIP.map((o) => o.value)}
          onChange={(items) => setFilter({ ownership: items })}
        />
        <PriceRange
          label={getLocale('Price Range')}
          placeholder={getLocale('Any')}
          start={filter.price_start as number}
          end={filter.price_end as number}
          step={1000000}
          onChange={([start, end]) =>
            setFilter({ price_start: Number(start), price_end: Number(end) })
          }
        />
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
          {getLocale('Search')}
        </Text>
        <Text display={{ base: 'block', md: 'none' }} textTransform="uppercase">
          {getLocale('Search Property')}
        </Text>
      </Button>
    </Flex>
  )
}

export default SearchForm
