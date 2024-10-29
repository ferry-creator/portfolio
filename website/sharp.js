// npm install sharp

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

import { thumbhashEncode } from './thumbhash-node.js'

const objectString = (obj) => Object.entries(obj)
  .map(([key, value]) => `${key}:${value}`)
  .join(' ')


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const effort = 6 // 1 <> 6, more CPU = better compression

const images = {
  "./static/projects/symbolik-ai/thumbnail.png": { q: 30 },
  "./static/projects/symbolik-ai/dolphin-login.png": { q: 20 },
  "./static/projects/symbolik-ai/dolphin-spotlight-request.png": { q: 30 },
  "./static/projects/clevertrack/thumbnail.png": { q: 30 },
  "./static/projects/clevertrack/app.png": { q: 20 },
  // "./static/projects/clevertrack/truck-frontpage.jpg": { q: 20 },
  "./static/projects/clevertrack/hubble-drawing.png": { q: 15 },
  "./static/projects/clevertrack/illustrations.png": { q: 25 },
  "./static/projects/DTU/thumbnail.png": { q: 30 },
  "./static/projects/DTU/FPGA-pong.png": { q: 10 },
  "./static/projects/DTU/sourdough.png": { q: 10 },
  "./static/projects/DTU/gluegun.png": { q: 25 },

  "./static/projects/index/shelly-run/shelly-run.png": { q: 30 },
  "./static/projects/index/mostly-code/standpoint.png": { q: 30 },
  "./static/projects/index/gamedev/flipit-microtransactions.png": { q: 30 },
  "./static/projects/index/gamedev/flipit-sketch.png": { q: 15 },
  "./static/projects/index/gamedev/flipit.png": { q: 30 },
  "./static/projects/index/gamedev/incubator.png": { q: 30 },

  "./static/images/hackerpose.png": { q: 30 },
  "./static/images/powerpose.png": { q: 30 },
}

const assets = {
  "./static/marker/bsc-design-innovation/combined.png": { q: 1, s: 58,
    k: sharp.kernel.nearest,
    alphaQuality: 0, nearLossless: true
  },
  "./static/marker/bsc-design-innovation/squiggle-cropped.png": { q: 1, s: 35,
    alphaQuality: 0,
  },
  "./static/marker/bsc-design-innovation/text-v2-cropped.png": { q: 1, s: 80,
    alphaQuality: 0,
  },
  "./static/marker/spotlight-full-index/spotlight-grey.png": { q: 1, s: 76,
    alphaQuality: 0
  },
  "./static/marker/spotlight-full-index/arrow-grey.png": { q: 1, s: 39,
    alphaQuality: 0
  },
  "./static/marker/spotlight-full-index/my-full-index-grey-purple-index.png": {
    q: 1, s: 62,
    alphaQuality: 0,
  },
  "./static/marker/spotlight-full-index/spotlight-squiggle.png": { q: 1, s: 22,
    alphaQuality: 0,
  },
  "./static/assets/goofy-ahh-me.png": { q: 1, s: 35, alphaQuality: 0 },
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const OUTPUT = './static/sharp/'
if (!fs.existsSync(OUTPUT)) { fs.mkdirSync(OUTPUT) }

const optimize = (img, name, config) => {
  const subpath = path.relative('./static', path.dirname(img))
  const destination = path.join(OUTPUT, subpath, name)
  fs.mkdirSync(path.dirname(destination), { recursive: true })

  Object.assign(config, { effort })
  return sharp(img)
    .toFormat(path.parse(name).ext.slice(1), config)
    .toFile(destination)
    .then(() => ({ destination }))
    .catch((err) => {
      console.error(`Error processing ${name} (${img}):`, err)
    })
}

const getDominantColor = async (img) => await sharp(img)
  .resize(1, 1, { kernel: sharp.kernel.cubic })
  .raw()
  .toBuffer()
  .then((data) => {
    const [r, g, b] = data
    return `rgb(${r},${g},${b})`
  })
  .catch((err) => {
    console.error('Error extracting dominant color:', err);
  })

const getMetadata = async (img) => await sharp(img)
  .metadata().then(
    ({ channels, width, height }) => ({ channels, width, height })
  )

const previews = {}

// -------------------------------------------------------------------
// Images pipeline with blur-up --------------------------------------
for(const [img, options] of Object.entries(images)) {
  const { q: quality } = options
  
  // const subpath = path.relative('./static', path.dirname(img))
  // const destination = path.join(OUTPUT, subpath, `${path.parse(img).name}.webp`)
  // fs.mkdirSync(path.dirname(destination), { recursive: true })

  // fast webp!
  optimize(img, `${path.parse(img).name}.webp`, { quality })
    .then(({ destination }) => {
      console.log(`<webp> (${objectString({ quality })}) -> ${destination}`)
    })

  optimize(img, `${path.parse(img).name}-lossless.webp`, { lossless: true })

  const metadata = await sharp(img).metadata()
  if(metadata.hasAlpha) {
    optimize(img, `${path.parse(img).name}-HQ.webp`, {
      quality: 92,
    })
  } else {
    // I like jpg compression better than webp :-) Less blurry
    optimize(img, `${path.parse(img).name}-HQ.jpg`, {
      quality: 90,
      progressive: true,
      mozjpeg: true
    })
  }

  // commented out: interlacing increases size!
  // HQGen(img, destination, 'png', {
  //   interlaced: true,
  //   compressionLevel: 9
  // })

  const previewKey = img.replaceAll('./static', '')
  previews[previewKey] = {}
  previews[previewKey]['metadata'] = await getMetadata(img)
  previews[previewKey]['color'] = await getDominantColor(img)
  previews[previewKey]['base64'] = await sharp(img)
    .resize(20)
    // .blur()
    .webp({ quality: 1 })
    .toBuffer()
    .then((data) => `data:image/webp;base64,${data.toString('base64')}`)
    .catch((err) => {
      console.error(`Error generating base64 preview for ${img}:`, err)
    })
  
  const thumbhash = (await thumbhashEncode(img)).dataurl.replace("data:image/png;base64,", "")
  previews[previewKey]['thumbhash'] = await sharp(Buffer.from(thumbhash, 'base64'))
    .resize(20)
    // .blur()
    .webp({ quality: 20 })
    .toBuffer()
    .then((data) => `data:image/webp;base64,${data.toString('base64')}`)
    .catch((err) => {
      console.error(`Error generating thumbhash preview for ${img}:`, err)
    })
}

console.log('')

// -------------------------------------------------------------------
// Assets pipeline (no blur-up) --------------------------------------
for(const [img, options] of Object.entries(assets)) {
  const {
    q: quality, s: size,
    k: kernel = sharp.kernel.lanczos3,
    ...restOptions
  } = options

  optimize(img, `${path.parse(img).name}-lossless.webp`, { lossless: true })

  const previewKey = img.replaceAll('./static', '')
  previews[previewKey] = {}
  previews[previewKey]['metadata'] = await getMetadata(img)
  previews[previewKey]['color'] = await getDominantColor(img)
  previews[previewKey]['base64'] = await sharp(img)
    .resize(size, null, { kernel })
    .webp({ quality, ...restOptions })
    .toBuffer()
    .then((data) => {
      const url = `data:image/webp;base64,${data.toString('base64')}`
      const kbs = (Buffer.byteLength(url, 'utf8') / 1024).toFixed(2)
      console.log(`<base64> (${objectString({ quality })}) <- ${kbs} kb ${img}`)
      return url
    })
    .catch((err) => {
      console.error(`Error generating base64 preview for ${img}:`, err)
    })
}

let id = 0
for(const img of Object.keys({...images, ...assets})) {
  const previewKey = img.replaceAll('./static', '')
  previews[previewKey]['id'] = id
  id++
}

// Save! -------------------------------------------------------------

fs.writeFileSync(
  './src/assets/image-data.json',
  JSON.stringify(previews, null, 2),
  'utf8'
)

fs.writeFileSync(
  './static/sharp/savestate.json',
  JSON.stringify({ images, assets }, null, 2),
  'utf8'
)

console.log(`\n✅ Done`)
