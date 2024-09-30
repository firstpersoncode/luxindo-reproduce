import { Block } from 'payload'

export const Margin = (): Block => ({
  slug: 'Margin', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'MarginBlock', // optional
  fields: [
    {
      name: 'background_color',
      label: 'Background Color',
      type: 'text',
      required: false,
    },
    {
      name: 'margin_desktop',
      label: 'Margin Desktop (in px)',
      type: 'number',
      required: false,
    },
    {
      name: 'margin_mobile',
      label: 'Margin Mobile (in px)',
      type: 'number',
      required: false,
    },
  ],
})
