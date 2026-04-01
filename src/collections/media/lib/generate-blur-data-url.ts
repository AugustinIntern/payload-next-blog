import { Buffer } from 'node:buffer'
import { getPlaiceholder } from 'plaiceholder'

export function isEligibleForBlurDataURL(mime?: string | null) {
  if (!mime?.startsWith('image/')) return false
  if (mime === 'image/svg+xml') return false

  return true
}

export async function generateBlurDataURL(
  buffer?: Buffer<ArrayBufferLike>,
): Promise<string | null> {
  if (!buffer) {
    console.warn('No buffer provided for generating blurDataURL')
    return null
  }
  const { base64 } = await getPlaiceholder(buffer)
  return base64
}
