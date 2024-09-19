import { Box, Button, Flex, Select, Input, VStack } from '@chakra-ui/react'
import {
  AREAS,
  PROPERTY_OWNERSHIP,
  PROPERTY_TYPES,
  SUB_AREAS,
} from '@/modules/Property/libs/options'
import { useContextProvider } from '../providers'
import { SearchParams } from '../providers/search-properties.service'
import { useContextProvider as useGlobalContextProvider } from '@/modules/Property/frontend/globals/providers'

const SearchFilters: React.FC<any> = () => {
  const { filter = {} as SearchParams, setFilter, handleSearch } = useContextProvider()
  const { getLocale } = useGlobalContextProvider()

  return (
    <Box mt={8}>
      <VStack gap={4}>
        <Select
          value={filter.type}
          onChange={(e) => setFilter({ type: e.target.value })}
          flex={1}
          minW="200px"
        >
          <option value="">{getLocale('SELECT TYPE')}</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>

        <Select
          value={filter.ownership}
          onChange={(e) => setFilter({ ownership: e.target.value })}
          flex={1}
          minW="200px"
        >
          <option value="">{getLocale('SELECT STATUS')}</option>
          {PROPERTY_OWNERSHIP.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>

        <Select
          value={filter.area_2}
          onChange={(e) => setFilter({ area_2: e.target.value })}
          flex={1}
          minW="200px"
        >
          {/* Add area options */}
          <option value="">{getLocale('SELECT AREA')}</option>
          {AREAS.map((area) => (
            <option key={area.value} value={area.value}>
              {area.label}
            </option>
          ))}
        </Select>

        <Input
          placeholder={getLocale('PROPERTY ID')}
          value={filter.sku}
          onChange={(e) => setFilter({ sku: e.target.value })}
          flex={1}
          minW="200px"
        />

        <Button
          onClick={handleSearch}
          bg="rgba(171, 116, 95, 1)"
          color="white"
          fontWeight="700"
          px={4}
          py={2}
        >
          {getLocale('FIND PROPERTIES')}
        </Button>
      </VStack>
    </Box>
  )
}

export default SearchFilters
