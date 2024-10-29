import * as ThumbHash from 'thumbhash'
import sharp from 'sharp'

export const thumbhashEncode = async (img) => {
  const image = sharp(img).resize(100, 100, { fit: 'inside' })
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const binaryThumbHash = ThumbHash.rgbaToThumbHash(info.width, info.height, data)
  // console.log('binaryThumbHash:', Buffer.from(binaryThumbHash))

  const thumbHashToBase64 = Buffer.from(binaryThumbHash).toString('base64')
  const thumbHashFromBase64 = Buffer.from(thumbHashToBase64, 'base64')
  const placeholderURL = ThumbHash.thumbHashToDataURL(binaryThumbHash)
  return {
    thumbhash: Buffer.from(binaryThumbHash),
    thumbhashb64: thumbHashToBase64,
    dataurl: placeholderURL
  }
}