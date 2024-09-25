import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'footer_note',
      label: 'Footer note',
      type: 'textarea',
      required: false,
    },
    {
      name: 'navigation_groups',
      label: 'Navigation Groups',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: false,
          localized: true
        },
        {
          name: 'navigations',
          label: 'Navigations',
          type: 'array',
          fields: [
            {
              name: 'icon',
              label: 'Icon',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
              localized: true
            },
            {
              name: 'value',
              label: 'Value',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
