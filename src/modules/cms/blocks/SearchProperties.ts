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
  ],
})
