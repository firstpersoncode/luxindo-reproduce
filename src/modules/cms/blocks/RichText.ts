import { Block } from 'payload'

export const RichText = (): Block => ({
  slug: 'RichText', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'RichTextBlock', // optional
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'text',
      localized: true,
      required: false,
      admin: {
        components: {
          Field: {
            path: '@/modules/cms/_fields/RichTextField',
            clientProps: { path: 'content', label: 'Content' },
          },
        },
      },
    },
  ],
})
