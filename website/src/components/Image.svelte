<script>
  import LoadstackImage from '$components/ImageLoadstack.svelte'

  import data from '$assets/image-data.json'

  export let src, alt
  export let lazy = true
  export let pixelate = false
  export let thumbhash = false
  export let full
  export let loadstack = ['compressed', 'lossless']

  const transparency = data[src]['metadata'].channels > 3

  const compressed = `/sharp${src.split('.')[0]}.webp`
  const HQ = `/sharp${src.split('.')[0]}-HQ.${transparency ? 'webp' : 'jpg'}`
  const lossless = `/sharp${src.split('.')[0]}-lossless.webp`

  const sources  = { compressed, HQ, lossless }
</script>

<LoadstackImage {src} {alt} {data}
  {lazy} {pixelate} {thumbhash}
  loadstack={loadstack.map(key => sources[key])}
  {full}
/>
