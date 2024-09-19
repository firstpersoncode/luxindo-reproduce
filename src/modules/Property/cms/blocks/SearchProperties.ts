import { Block } from 'payload'

export const SearchProperties = ({ ...field }: any): Block => ({
  slug: 'SearchProperties', // required
  interfaceName: 'SearchPropertiesBlock', // optional
  fields: [
    {
      name: field.name,
      label: field.label,
      type: 'text',
      required: false,
    },
  ],
})
