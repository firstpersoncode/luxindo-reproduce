import { useState } from 'react'
import { Flex, Text, Input, Button, Box, VStack } from '@chakra-ui/react'
import Image from '@/modules/frontend/_components/Image'
import { useContextProvider } from './providers'
import { LOCATIONS, PROPERTY_OWNERSHIP, PROPERTY_TYPES } from '@/modules/options'
import PriceRange from '@/modules/frontend/_components/PriceRange'
import CheckBoxSelect from '@/modules/frontend/_components/CheckBoxSelect'
import CheckBoxTreeSelect from '@/modules/frontend/_components/CheckBoxTreeSelect'
import Modal from '@/modules/frontend/_components/Modal'

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
  disabled?: boolean
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
  disabled,
}) =>
  isSelect ? (
    <CheckBoxSelect
      icon={icon}
      label={label}
      placeholder={placeholder}
      options={options || []}
      values={value as string[]}
      onChange={onChange}
      disabled={disabled}
    />
  ) : isTreeSelect ? (
    <CheckBoxTreeSelect
      icon={icon}
      label={label}
      placeholder={placeholder}
      options={options || []}
      values={value as string[]}
      subValues={subValues as string[]}
      onChange={onChange}
      disabled={disabled}
    />
  ) : (
    <>
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
    </>
  )

const Form: React.FC = () => {
  const { getLocale, filter, setFilter } = useContextProvider()

  return (
    <Flex
      w="100%"
      alignItems={{ base: 'flex-start', lg: 'center' }}
      gap="24px"
      flexDir={{ base: 'column', lg: 'row' }}
      flexWrap="wrap"
      color={{ base: 'white', lg: 'brand.secondary' }}
    >
      <Box minW={{ base: '100%', lg: '250px' }} flexGrow={1}>
        <SearchField
          icon="/icons/space_dashboard_black.png"
          label={getLocale('Area')}
          placeholder={getLocale('Any')}
          isSelect
          value={[]}
          options={[]}
          onChange={({ values, subValues }: any) => null}
          disabled
        />
      </Box>

      <Box minW={{ base: '100%', lg: '250px' }} flexGrow={1}>
        <SearchField
          icon="/icons/bed_black.png"
          label={getLocale('Bedroom')}
          placeholder={getLocale('Any')}
          isSelect
          value={[]}
          options={[]}
          onChange={({ values, subValues }: any) => null}
          disabled
        />
      </Box>

      <Box minW={{ base: '100%', lg: '250px' }} flexGrow={1}>
        <SearchField
          icon="/icons/location_on_black.png"
          label={getLocale('Location')}
          placeholder={getLocale('Any')}
          isTreeSelect
          value={filter.area_1}
          subValues={filter.area_2}
          options={LOCATIONS}
          onChange={({ values, subValues }: any) =>
            setFilter({ area_1: values, area_2: subValues })
          }
        />
      </Box>

      <Box minW={{ base: '100%', lg: '250px' }} flexGrow={1}>
        <SearchField
          icon="/icons/key_black.png"
          label={getLocale('Ownership')}
          placeholder={getLocale('Any')}
          isSelect
          value={filter.ownership}
          options={PROPERTY_OWNERSHIP.map((o) => o.value)}
          onChange={(items) => setFilter({ ownership: items })}
        />
      </Box>

      <Box minW={{ base: '100%', lg: 'auto' }} flexGrow={1}>
        <SearchField
          icon="/icons/home_work_black.png"
          label={getLocale('Type')}
          placeholder={getLocale('Any')}
          isSelect
          value={filter.type}
          options={PROPERTY_TYPES.map((t) => t.value)}
          onChange={(items) => setFilter({ type: items })}
        />
      </Box>

      <Box minW={{ base: '100%', lg: 'auto' }} flexGrow={1}>
        <SearchField
          icon="/icons/nest_multi_room_black.png"
          label={getLocale('Features')}
          placeholder={getLocale('Any')}
          isSelect
          value={[]}
          options={[]}
          onChange={({ values, subValues }: any) => null}
          disabled
        />
      </Box>

      <Box minW={{ base: '100%', lg: '580px' }} flexGrow={1}>
        <PriceRange
          icon="/icons/sell_black.png"
          label={getLocale('Price Range')}
          placeholder={getLocale('Any')}
          start={filter.price_start as number}
          end={filter.price_end as number}
          step={100000000}
          onChange={([start, end]) =>
            setFilter({ price_start: Number(start), price_end: Number(end) })
          }
        />
      </Box>
    </Flex>
  )
}

const Actions: React.FC = () => {
  const { cta, getLocale, handleSearch } = useContextProvider()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        alignSelf={{ base: 'flex-start' }}
        variant="link"
        fontSize="24px"
        fontWeight={600}
        padding="8px 16px"
        gap="12px"
        onClick={() => setOpen(true)}
        display={{ base: 'flex', md: 'flex', lg: 'none' }}
      >
        <Image src="/icons/search_black.png" alt="Search" width={24} height={24} />
        <Text className="cormorant" textTransform="uppercase">
          {cta || getLocale('Search Property')}
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
              {cta || getLocale('Search Property')}
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
      <Flex bg="white" as="form" flexDirection="column" width="100%">
        <Box padding="36px" display={{ base: 'none', md: 'none', lg: 'block' }}>
          <Form />
        </Box>
        <Actions />
      </Flex>
    </>
  )
}

export default SearchForm
