import { CollectionConfig } from 'payload'
import {
  AMENITIES,
  AREAS,
  COUNTRIES,
  CURRENCIES,
  PLANS,
  PROPERTY_OWNERSHIP,
  PROPERTY_TYPES,
  SPACES,
  STATES,
  SUB_AREAS,
} from '@/libs/options'
import { formatSlug } from '@/libs/utils'

const PropertyInfo: CollectionConfig['fields'] = [
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
    name: 'sku',
    label: 'SKU',
    type: 'text',
    required: false,
  },

  {
    name: 'type',
    label: 'Type',
    type: 'select',
    required: false,
    options: PROPERTY_TYPES,
  },

  {
    name: 'ownership',
    label: 'Ownership',
    type: 'select',
    required: false,
    options: PROPERTY_OWNERSHIP,
  },

  {
    name: 'price',
    label: 'Price',
    type: 'number',
    required: false,
    defaultValue: 0,
  },

  {
    name: 'currency',
    label: 'Currency',
    type: 'select',
    required: false,
    options: CURRENCIES,
  },

  {
    name: 'agent',
    label: 'Agent',
    type: 'relationship',
    relationTo: 'agents',
    hasMany: false,
    required: false,
    admin: {
      position: 'sidebar',
    },
  },
]

const PropertyDetails: CollectionConfig['fields'] = [
  {
    name: 'plans',
    label: 'Plans',
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
        name: 'icon_placeholder',
        admin: {
          hidden: true,
        },
        type: 'text',
        required: false,
      },
      {
        name: 'title',
        label: 'Title',
        type: 'select',
        required: false,
        options: PLANS,
        localized: true,
      },
      {
        name: 'value',
        label: 'Value',
        type: 'text',
        required: false,
        localized: true,
      },
    ],
  },
  {
    name: 'spaces',
    label: 'Spaces',
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
        type: 'select',
        required: false,
        options: SPACES,
        localized: true,
      },
      {
        name: 'value',
        label: 'Value',
        type: 'text',
        required: false,
        localized: true,
      },
    ],
  },
  {
    name: 'amenities',
    label: 'Amenities',
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
        type: 'select',
        required: false,
        options: AMENITIES,
        localized: true,
      },
      {
        name: 'value',
        label: 'Value',
        type: 'text',
        required: false,
        localized: true,
      },
    ],
  },
  {
    name: 'descriptions',
    label: 'Descriptions',
    type: 'richText',
    required: false,
    localized: true,
  },
]

const PropertyLocation: CollectionConfig['fields'] = [
  {
    name: 'area_1',
    label: 'Area',
    type: 'select',
    required: false,
    options: AREAS,
  },
  {
    name: 'area_2',
    label: 'Sub Area',
    type: 'select',
    required: false,
    options: SUB_AREAS,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    required: false,
  },

  {
    label: 'Geolocation',
    type: 'collapsible',
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        name: 'lat',
        label: 'Latitude',
        type: 'number',
        required: false,
        defaultValue: 0,
      },
      {
        name: 'lng',
        label: 'Longitude',
        type: 'number',
        required: false,
        defaultValue: 0,
      },
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        required: false,
        options: COUNTRIES,
      },
      {
        name: 'state',
        label: 'State',
        type: 'select',
        required: false,
        options: STATES,
      },
      {
        name: 'street_name',
        label: 'Street Name',
        type: 'text',
        required: false,
      },
      {
        name: 'street_number',
        label: 'Street Number',
        type: 'text',
        required: false,
      },
      {
        name: 'post_code',
        label: 'Post Code',
        type: 'text',
        required: false,
      },
    ],
  },
]

const PropertyGallery: CollectionConfig['fields'] = [
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

  {
    name: 'video',
    label: 'Video',
    type: 'text',
    required: false,
  },
]

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `${process.env.APP_URL}/${locale}/properties/${doc.slug}?mode=preview`
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
          description: 'Property Information',
          fields: PropertyInfo,
        },
        {
          label: 'Details',
          description: 'Property Details',
          fields: PropertyDetails,
        },
        {
          label: 'Location',
          description: 'Property Location',
          fields: PropertyLocation,
        },
        {
          label: 'Gallery',
          description: 'Property Gallery',
          fields: PropertyGallery,
        },
      ],
    },
  ],
}
