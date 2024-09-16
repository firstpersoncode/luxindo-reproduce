import { Block } from 'payload'

export const SearchCollection = ({ ...field }: any): Block => ({
  slug: 'SearchCollection', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'SearchCollectionBlock', // optional
  fields: [
    {
      name: field.name,
      label: field.label,
      type: 'text',
      required: false,
    },
  ],
})
