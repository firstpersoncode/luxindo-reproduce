import React, { useState } from 'react'
import { Flex, Text, Input, Select, Button, Box, Stack, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useContextProvider } from './providers'
import { LOCATIONS, PROPERTY_OWNERSHIP, PROPERTY_TYPES } from '@/modules/options'
import PriceRange from '@/modules/frontend/_components/PriceRange'
import CheckBoxSelect from '@/modules/frontend/_components/CheckBoxSelect'
import CheckBoxTreeSelect from '@/modules/frontend/_components/CheckBoxTreeSelect'
import Modal from '../../_components/Modal'
// import BottomSheet from '@/modules/frontend/_components/BottomSheet'

interface SearchFieldProps {
  icon?: string
  label: string
  placeholder?: string
  isSelect?: boolean
  isTreeSelect?: boolean
  options?: any[]
  value: string | string[]
  subValues?: string[]
  onChange?: (e: React.ChangeEvent<any>) => void
}

const SearchField: React.FC<SearchFieldProps> = ({
  icon,
  label,
  placeholder,
  isSelect,
  isTreeSelect,
  options,
  value,
  subValues,
  onChange,
}) =>
  isSelect ? (
    <CheckBoxSelect
      icon={icon}
      label={label}
      placeholder={placeholder}
      options={options ?? []}
      values={value as string[]}
      onChange={onChange}
    />
  ) : isTreeSelect ? (
    <CheckBoxTreeSelect
      icon={icon}
      label={label}
      placeholder={placeholder}
      options={options ?? []}
      values={value as string[]}
      subValues={subValues as string[]}
      onChange={onChange}
    />
  ) : (
    <Flex mb="18px" flexDirection="column" flexGrow={1} width={{ base: 'full', md: 'full', lg: 'auto' }}>
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
  )

const Form: React.FC = () => {
  const { getLocale, filter, setFilter } = useContextProvider()

  return (
    <Flex alignItems="center" gap="24px" color="white" flexWrap="wrap">
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
        isTreeSelect
        value={filter.area_1}
        subValues={filter.area_2}
        options={LOCATIONS}
        onChange={({ values, subValues }: any) => setFilter({ area_1: values, area_2: subValues })}
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
        step={100000000}
        onChange={([start, end]) =>
          setFilter({ price_start: Number(start), price_end: Number(end) })
        }
      />
    </Flex>
  )
}

const Actions: React.FC = () => {
  const { cta, getLocale, handleSearch } = useContextProvider()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        alignSelf={{ base: 'flex-start', md: 'flex-end' }}
        marginTop={{ base: '18px', md: '32px' }}
        backgroundColor="brand.primary"
        color="white"
        fontSize="24px"
        fontWeight={600}
        padding="8px 16px"
        gap="12px"
        onClick={handleSearch}
        display={{ base: 'none', md: 'none', lg: 'flex' }}
      >
        <Image src="/icons/search.png" alt="Search" width={24} height={24} />
        <Text className="cormorant" textTransform="uppercase">
          {cta ?? getLocale('Search')}
        </Text>
      </Button>

      <Button
        alignSelf={{ base: 'flex-start' }}
        marginTop={{ base: '18px', md: '32px' }}
        backgroundColor="brand.primary"
        color="white"
        fontSize="24px"
        fontWeight={600}
        padding="8px 16px"
        gap="12px"
        onClick={() => setOpen(true)}
        display={{ base: 'flex', md: 'flex', lg: 'none' }}
      >
        <Image src="/icons/search.png" alt="Search" width={24} height={24} />
        <Text className="cormorant" textTransform="uppercase">
          {cta ?? getLocale('Search Property')}
        </Text>
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)} size="full">
        <VStack
          minH="100vh"
          pt={{ base: '100px', md: '200px' }}
          pb={{ base: '32px', md: '64px' }}
          px={{ base: '32px', md: '64px' }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Form />
          <Button
            backgroundColor="brand.primary"
            color="white"
            fontSize="24px"
            fontWeight={600}
            padding="8px 16px"
            gap="12px"
            onClick={() => {
              setOpen(false)
              handleSearch()
            }}
          >
            <Image src="/icons/search.png" alt="Search" width={24} height={24} />
            <Text className="cormorant" textTransform="uppercase">
              {cta ?? getLocale('Search Property')}
            </Text>
          </Button>
        </VStack>
      </Modal>
    </>
  )
}

const SearchForm: React.FC = () => {
  return (
    <>
      <Flex as="form" flexDirection="column" marginTop={{ base: '18px', md: '64px' }} width="100%">
        <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
          <Form />
        </Box>
        <Actions />
      </Flex>
    </>
  )
}

export default SearchForm
