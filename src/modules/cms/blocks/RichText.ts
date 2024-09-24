import { Block } from 'payload'

export const RichText = ({ ...field }: any): Block => ({
  slug: 'RichText', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'RichTextBlock', // optional
  fields: [
    {
      name: field.name,
      label: field.label,
      type: 'text',
      localized: field.localized ?? false,
      required: false,
      admin: {
        components: {
          Field: {
            path: '@/modules/cms/_fields/RichTextField',
            clientProps: { path: field.name, label: field.label },
          },
        },
      },
    },
  ],
})
