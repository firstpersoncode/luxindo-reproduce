import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { SlateToLexicalFeature } from '@payloadcms/richtext-lexical/migrate'
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
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          SlateToLexicalFeature({}),
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML(field.name, { name: `${field.name}_html` }),
  ],
})
