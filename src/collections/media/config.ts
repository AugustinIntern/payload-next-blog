import { file } from 'node_modules/zod/v4/mini/external.cjs'
import type { CollectionConfig } from 'payload'
import { da } from 'payload/i18n/da'
import { generateBlurDataURL, isEligibleForBlurDataURL } from './lib/generate-blur-data-url'

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
      async ({ operation, data, req }) => {
        if (operation !== 'create') return data
        if (!isEligibleForBlurDataURL(req.file?.mimetype)) return data

        const base64 = await generateBlurDataURL(req.file?.data)
        if (!base64) return data

        data.blurDataURL = base64
        console.log(`Generated blurDataURL for ${data.filename}`)

        return data
      },
    ],
  },
}
