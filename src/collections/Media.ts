import { file } from 'node_modules/zod/v4/mini/external.cjs'
import type { CollectionConfig } from 'payload'
import { da } from 'payload/i18n/da'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'blurDataURL',
      type: 'text',
      required: true,
      admin: { hidden: true },
    },
  ],
  upload: true,
  hooks: {
    beforeChange: [
      ({ operation, data, req }) => {
        if (operation !== 'create') return data
      },
    ],
  },
}
