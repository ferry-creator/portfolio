<script>
  export let src, alt
  export let pixelate

  import previews from '$assets/image-sharp-previews.json'

  const color = previews[src]['color']
  const metadata = previews[src]['metadata']
  const transparency = metadata.channels > 3

  const base64 = previews[src]['base64']
  const compressed = `/sharp${src.split('.')[0]}.webp`
  const HQ = `/sharp${src.split('.')[0]}-HQ.${transparency ? 'webp' : 'jpg'}`
  const lossless = `/sharp${src.split('.')[0]}-lossless.webp`

  const sources  = { base64, compressed, HQ, lossless }
  export let loadstack = ['base64', 'compressed', 'lossless']
  let index = 0

  $: loaded = index > 1

  let img
  import { onMount } from 'svelte'
  onMount(() => {
    img.src = sources[loadstack[index]]
    img.onload = () => {
      console.log("Loaded: ", loadstack[index])

      index++
      if (index < loadstack.length) {
        img.src = sources[loadstack[index]]
      }
    }
  })
</script>

<!-- <picture> -->
  <!-- <source type="image/webp" srcset={lossless}> -->
  <!-- <source type="image/webp" srcset={lossless}> -->
  <!-- <img src={base64} {alt} bind:this={img}> -->
<!-- </picture> -->

<div style={transparency ? '' : `background: ${color};`}>
  <img
    src={base64} {alt}
    bind:this={img}
    width={metadata.width}
    style={`aspect-ratio: ${metadata.width} / ${metadata.height};`}
    class:loaded={index > 1}
    class:blur-up={!pixelate}
    class:pixelate
  >
</div>

<style lang="postcss">
  div {
    @apply overflow-hidden rounded-[inherit]; /* clipping the blur! */
    @apply block;
  }

  img {
    &.blur-up {
      /* filter: blur(30px); */
      &.loaded {
        /* animation: 240ms cubic-bezier(0.01,0.99,0.01,0.99) 110ms unblur forwards; */
        /* animation: 0ms cubic-bezier(0,1,0,1) 0ms forwards unblur; */
      }
    }

    &.pixelate {
      image-rendering: pixelated;
      &.loaded {
        image-rendering: inherit;
      }
    }
  }

  @keyframes unblur {
    0% { filter: blur(30px) }
    /* 98% { filter: blur(0px) }
    99% { filter: none } */
    100% { filter: none }
  }
</style>