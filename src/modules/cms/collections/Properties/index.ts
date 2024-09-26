import { CollectionConfig } from 'payload'

import {
  AMENITIES,
  COUNTRIES,
  CURRENCIES,
  PLANS,
  PROPERTY_OWNERSHIP,
  PROPERTY_TYPES,
  SPACES,
  STATES,
} from '@/modules/options'
import { formatSlug } from '../../utils/formatSlug'
import { BLOCKS } from '@/modules/cms/blocks'
import { PROPERTY_TEMPLATES } from './templates'

const PropertyInfo: CollectionConfig['fields'] = [
  {
    name: 'title',
    label: 'Title',
    type: 'text',
    required: true,
    localized: true,
  },

  {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    index: true,
    required: true,
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
    options: PROPERTY_TEMPLATES,
  },
  {
    name: 'image',
    label: 'Image',
    type: 'upload',
    relationTo: 'media',
    required: false,
  },
]

const PropertyPlans: CollectionConfig['fields'] = [
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
]

const PropertySpaces: CollectionConfig['fields'] = [
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
]

const PropertyAmenities: CollectionConfig['fields'] = [
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
]

const PropertyDetails: CollectionConfig['fields'] = [
  {
    name: 'descriptions',
    label: 'Descriptions',
    type: 'text',
    required: false,
    localized: true,
    admin: {
      components: {
        Field: {
          path: '@/modules/cms/_fields/RichTextField',
          clientProps: { path: 'descriptions', label: 'Descriptions' },
        },
      },
    },
  },

  // {
  //   name: 'descriptions',
  //   label: 'Descriptions',
  //   type: 'richText',
  //   required: false,
  //   localized: true,
  //   editor: lexicalEditor({
  //     features: ({ defaultFeatures }) => [
  //       ...defaultFeatures,
  //       SlateToLexicalFeature({}),
  //       HTMLConverterFeature({}),
  //     ],
  //   }),
  // },
  // {
  //   name: 'descriptions_html',
  //   label: 'Descriptions HTML',
  //   type: 'text',
  //   required: false,
  //   localized: true,
  //   admin: {
  //     components: {
  //       Field: {
  //         path: '@/modules/cms/_fields/LexicalToHTMLField',
  //         clientProps: { path: 'descriptions_html' },
  //       },
  //     },
  //   },
  // },
  // lexicalHTML('descriptions', { name: 'descriptions_html' }),
]

const PropertyLocation: CollectionConfig['fields'] = [
  {
    name: 'area_1',
    label: 'Area',
    type: 'text',
    required: false,
    admin: {
      components: {
        Field: {
          path: '@/modules/cms/_fields/AreaSelectField',
          clientProps: { path: 'area_1', childPath: 'area_2' },
        },
      },
    },
  },
  {
    name: 'area_2',
    label: 'Sub Area',
    type: 'text',
    required: false,
    admin: {
      components: {
        Field: {
          path: '@/modules/cms/_fields/SubAreaSelectField',
          clientProps: { path: 'area_2', parentPath: 'area_1' },
        },
      },
    },
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
        type: 'text',
        required: false,
      },
      {
        name: 'lng',
        label: 'Longitude',
        type: 'text',
        required: false,
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
    name: 'video',
    label: 'Video',
    type: 'text',
    required: false,
  },

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
]

const PropertySections: CollectionConfig['fields'] = [
  {
    name: 'sections',
    label: 'Sections',
    type: 'blocks',
    required: false,
    blocks: BLOCKS,
  },
]

const PropertyAgent: CollectionConfig['fields'] = [
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

const PropertyRelated: CollectionConfig['fields'] = [
  {
    name: 'related_properties',
    label: 'Related Properties',
    type: 'relationship',
    relationTo: 'properties',
    hasMany: true,
    required: false,
    maxRows: 3,
    admin: {
      position: 'sidebar',
    },
  },
]

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `${process.env.NEXT_PUBLIC_APP_URL}/${locale}/${doc.slug}`
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
          label: 'Plans',
          description: 'Property Plans',
          fields: PropertyPlans,
        },
        {
          label: 'Spaces',
          description: 'Property Spaces',
          fields: PropertySpaces,
        },
        {
          label: 'Amenities',
          description: 'Property Amenities',
          fields: PropertyAmenities,
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
        {
          label: 'Sections',
          description: 'Property Sections',
          fields: PropertySections,
        },
        {
          label: 'Agent',
          description: 'Property Agent',
          fields: PropertyAgent,
        },
        {
          label: 'Related',
          description: 'Related Properties',
          fields: PropertyRelated,
        },
      ],
    },
  ],
}
