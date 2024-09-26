import { Block } from 'payload'

export const HeroSearch = (): Block => ({
  slug: 'HeroSearch', // required
  interfaceName: 'HeroSearchBlock', // optional
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
            },
            {
              name: 'cta',
              label: 'CTA',
              type: 'text',
              required: false,
            },
            {
              name: 'search_page_slug',
              label: 'Search Page Slug',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          label: 'Slideshow',
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
        },
      ],
    },
  ],
})
