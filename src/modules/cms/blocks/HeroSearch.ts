import { Block } from 'payload'

export const HeroSearch = (): Block => ({
  slug: 'HeroSearch', // required
  interfaceName: 'HeroSearchBlock', // optional
  fields: [
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      fields: [
        {
          name: 'file',
          label: 'File',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
})
