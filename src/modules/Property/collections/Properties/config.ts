import { CollectionConfig } from 'payload'
import { SlateToLexicalFeature } from '@payloadcms/richtext-lexical/migrate'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
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
  PROPERTY_TEMPLATES,
} from '@/modules/Property/libs/options'
import { formatSlug } from '@/modules/Property/libs/utils'
import { BLOCKS } from '@/modules/Property/blocks/modules'

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
    // defaultValue: "default",
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
    type: 'richText',
    required: false,
    localized: true,
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => [
        ...defaultFeatures,
        SlateToLexicalFeature({}),
        HTMLConverterFeature({}),
      ],
    }),
  },
  lexicalHTML('descriptions', { name: 'descriptions_html' }),
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
        name: 'lat_str',
        label: 'Latitude',
        type: 'text',
        required: false,
      },
      {
        name: 'lng_str',
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
        return `${process.env.NEXT_PUBLIC_APP_URL}/${locale}/property/${doc.slug}?mode=preview`
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
  // endpoints: [
  //   {
  //     path: '/search',
  //     method: 'get',
  //     handler: async (req: any, res: any, next) => {
  //       const payload = await getPayload({
  //         config: configPromise,
  //       })

  //       const properties = await payload.find({
  //         collection: 'properties',
  //         // page: 1,
  //         // limit: 10
  //         // where: req.query,
  //       })

  //       res.status(200).send({ docs: properties.docs })
  //     },
  //   },
  // ],
}
