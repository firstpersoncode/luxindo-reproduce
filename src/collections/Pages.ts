import { PAGE_TEMPLATES } from './options'
import { formatSlug } from './utils'
import { CollectionConfig } from 'payload'
import { RichText } from './blocks/RichText'

const PageInfo: CollectionConfig['fields'] = [
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    required: false,
    localized: true,
  },

  {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    index: true,
    required: false,
    hooks: {
      beforeValidate: [formatSlug('title')],
    },
  },

  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    required: false,
    localized: true,
  },

  {
    // description
    name: 'keywords',
    label: 'Keywords',
    type: 'textarea',
    required: false,
  },
  {
    name: 'template',
    label: 'Template',
    type: 'select',
    required: false,
    // defaultValue: 'default',
    options: PAGE_TEMPLATES,
  },
  {
    name: 'image',
    label: 'Image',
    type: 'upload',
    relationTo: 'media',
    required: false,
  },
]

const PageSections: CollectionConfig['fields'] = [
  {
    name: 'sections',
    label: 'Sections',
    type: 'blocks',
    required: false,
    blocks: [RichText({ name: 'content', label: 'Content' })],
  },
]

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `${process.env.NEXT_PUBLIC_APP_URL}/${locale}/${doc.slug}?mode=preview`
      }

      return null
    },
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Info',
          description: 'Page Information',
          fields: PageInfo,
        },

        {
          label: 'Sections',
          description: 'Page Sections',
          fields: PageSections,
        },
      ],
    },
  ],
}
