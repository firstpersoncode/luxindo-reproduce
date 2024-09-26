import { PROPERTY_OWNERSHIP, PROPERTY_TYPES } from '@/options'
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
        // {
        //   label: 'Filters',
        //   fields: [
        //     {
        //       name: 'filter_area_1',
        //       label: 'Filter Area',
        //       type: 'text',
        //       required: false,
        //       admin: {
        //         components: {
        //           Field: {
        //             path: '@/modules/cms/_fields/AreaSelectField',
        //             clientProps: { path: 'filter_area_1', childPath: 'filter_area_2' },
        //           },
        //         },
        //       },
        //     },
        //     {
        //       name: 'filter_area_2',
        //       label: 'Filter Sub Area',
        //       type: 'text',
        //       required: false,
        //       admin: {
        //         components: {
        //           Field: {
        //             path: '@/modules/cms/_fields/SubAreaSelectField',
        //             clientProps: { path: 'filter_area_2', parentPath: 'filter_area_1' },
        //           },
        //         },
        //       },
        //     },
        //     {
        //       name: 'filter_type',
        //       label: 'Filter Type',
        //       type: 'select',
        //       required: false,
        //       options: PROPERTY_TYPES,
        //     },
        //     {
        //       name: 'filter_ownership',
        //       label: 'Filter Ownership',
        //       type: 'select',
        //       required: false,
        //       options: PROPERTY_OWNERSHIP,
        //     },
        //   ],
        // },
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
