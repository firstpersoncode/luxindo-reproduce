import {
  LOCATIONS,
  MAX_PRICE,
  MIN_PRICE,
  PROPERTY_OWNERSHIP,
  PROPERTY_TYPES,
} from '@/modules/options'
import { Block, Field } from 'payload'

const FILTERS: Field[] = [
  {
    name: 'filter_area',
    label: 'Area',
    type: 'text',
    required: false,
    // options: LOCATIONS,
    admin: {
      components: {
        Field: {
          path: '@/modules/cms/_fields/AreaSelectFieldMany',
          clientProps: { path: 'filter_area', childPath: 'filter_sub_area' },
        },
      },
    }
  },

  {
    name: 'filter_sub_area',
    label: 'Sub Area',
    type: 'text',
    required: false,
    // options: LOCATIONS.map(l => l.children || []).flat(),
    admin: {
      components: {
        Field: {
          path: '@/modules/cms/_fields/SubAreaSelectFieldMany',
          clientProps: { path: 'filter_sub_area', parentPath: 'filter_area' },
        },
      },
    }
  },

  {
    name: 'filter_types',
    label: 'Types',
    type: 'select',
    required: false,
    hasMany: true,
    options: PROPERTY_TYPES,
  },

  {
    name: 'filter_ownerships',
    label: 'Ownerships',
    type: 'select',
    required: false,
    hasMany: true,
    options: PROPERTY_OWNERSHIP,
  },

  {
    name: 'filter_price_start',
    label: 'Price Start',
    type: 'number',
    required: false,
    min: MIN_PRICE,
    max: MAX_PRICE,
  },

  {
    name: 'filter_price_end',
    label: 'Price End',
    type: 'number',
    required: false,
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
]

export const Search = (): Block => ({
  slug: 'Search', // required
  interfaceName: 'SearchBlock', // optional
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Info',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: false,
              localized: true
            },
          ],
        },
        {
          label: 'Initial Filters',
          fields: FILTERS,
        },
      ],
    },
  ],
})
