import React, { useState } from 'react'
import { Box, Button, Flex, Select, Input } from '@chakra-ui/react'
import { AREAS, PROPERTY_OWNERSHIP, PROPERTY_TYPES, SUB_AREAS } from '@/libs/options'
import { useContextProvider } from './libs/providers'

const SearchFilters: React.FC<any> = ({ onSubmit }) => {
  const [filter, setFilter] = useState({
    type: '',
    ownership: '',
    area_2: '',
    area_1: '',
    sku: '',
  })

  const { handleSearch } = useContextProvider()

  return (
    <Box mt={8}>
      <Flex flexWrap="wrap" gap={4}>
        <Select
          value={filter.type}
          onChange={(e) => setFilter((v) => ({ ...v, type: e.target.value }))}
          flex={1}
          minW="200px"
        >
          <option value="">SELECT TYPE</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>

        <Select
          value={filter.ownership}
          onChange={(e) => setFilter((v) => ({ ...v, ownership: e.target.value }))}
          flex={1}
          minW="200px"
        >
          <option value="">SELECT STATUS</option>
          {PROPERTY_OWNERSHIP.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>

        <Select
          value={filter.area_2}
          onChange={(e) => setFilter((v) => ({ ...v, area_2: e.target.value }))}
          flex={1}
          minW="200px"
        >
          {/* Add area options */}
          <option value="">SELECT AREA</option>
          {AREAS.map((area) => (
            <option key={area.value} value={area.value}>
              {area.label}
            </option>
          ))}
        </Select>

        <Select
          value={filter.area_1}
          onChange={(e) => setFilter((v) => ({ ...v, area_1: e.target.value }))}
          flex={1}
          minW="200px"
        >
          <option value="">SELECT SUB AREA</option>
          {SUB_AREAS.map((area) => (
            <option key={area.value} value={area.value}>
              {area.label}
            </option>
          ))}
        </Select>

        <Input
          placeholder="PROPERTY ID"
          value={filter.sku}
          onChange={(e) => setFilter((v) => ({ ...v, sku: e.target.value }))}
          flex={1}
          minW="200px"
        />

        <Button
          onClick={() => {
            handleSearch({ ...filter })
            onSubmit()
          }}
          bg="rgba(171, 116, 95, 1)"
          color="white"
          fontWeight="700"
          px={4}
          py={2}
        >
          FIND PROPERTIES
        </Button>
      </Flex>
    </Box>
  )
}

export default SearchFilters
