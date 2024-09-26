import { PROPERTY_OWNERSHIP, PROPERTY_TYPES } from '@/options'
import { Block } from 'payload'

export const SearchProperties = (): Block => ({
  slug: 'SearchProperties', // required
  interfaceName: 'SearchPropertiesBlock', // optional
  fields: [
    {
      name: "search_properties",
      label: 'Search Properties',
      type: 'text',
      required: false,
    },
    {
      name: 'filter_area_1',
      label: 'Filter Area',
      type: 'text',
      required: false,
      admin: {
        components: {
          Field: {
            path: '@/modules/cms/_fields/AreaSelectField',
            clientProps: { path: 'filter_area_1', childPath: 'filter_area_2' },
          },
        },
      },
    },
    {
      name: 'filter_area_2',
      label: 'Filter Sub Area',
      type: 'text',
      required: false,
      admin: {
        components: {
          Field: {
            path: '@/modules/cms/_fields/SubAreaSelectField',
            clientProps: { path: 'filter_area_2', parentPath: 'filter_area_1' },
          },
        },
      },
    },
    {
      name: 'filter_type',
      label: 'Filter Type',
      type: 'select',
      required: false,
      options: PROPERTY_TYPES,
    },
    {
      name: 'filter_ownership',
      label: 'Filter Ownership',
      type: 'select',
      required: false,
      options: PROPERTY_OWNERSHIP,
    },
  ],
})
