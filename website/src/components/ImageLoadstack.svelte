<script>
  export let data
  export let loadstack

  export let src, alt
  export let lazy = true
  export let pixelate = false
  export let thumbhash = false
  export let noscriptSelector = 'last' // 'last' | i: number

  const id = data[src]['id']

  const color = data[src]['color']
  const preview = thumbhash ? data[src]['thumbhash'] : data[src]['base64']
  const metadata = data[src]['metadata']
  const transparency = metadata.channels > 3

  const noscriptSrc =
    noscriptSelector == 'last' ? loadstack[loadstack.length-1]
      : loadstack[noscriptSelector]

  let img
  let imageSource = null
  import { onMount } from "svelte"
  onMount(async () => {
    console.log("mounted", imagesLoadedBeforeMount, window.imageLoaderSources[id])
    img.onload = function(event) {
      imageLoader(id, 'image', true) // set onmount flag
    }
    if(imagesLoadedBeforeMount.has(id)) {
      imageSource = window.imageLoaderSources[id] || null
      img.style.visibility = 'visible'
      img.fetchPriority = 'low'
    }
  })
</script>

<div
  style={`max-width: ${metadata.width}px;${transparency ? '' : `background: ${color};`}`}
  class="relative"
  class:clip-blur-up={!transparency}
>
  <img
    id={`p${id}`}
    src={preview} alt="" aria-hidden="true"
    width={metadata.width}
    height={metadata.height}
    style={`aspect-ratio: ${metadata.width} / ${metadata.height};`}
    onload={`imageLoader('${id}', 'preview')`}
  >
  <div class={`blurtop absolute inset-0`} class:hidden={transparency} />
  <picture>
    <img
      id={`i${id}`}
      class="image"
      class:lazy
      loading={lazy ? 'lazy' : null}
      {alt} src={imageSource} bind:this={img}
      width={metadata.width}
      height={metadata.height}
      style={`aspect-ratio: ${metadata.width} / ${metadata.height};`}
      onload={`imageLoader(${id}, 'image')`}
      data-loadstack={loadstack}
    >
  </picture>

  <noscript>
    {#if !transparency}
      <img
        src={preview} alt="" aria-hidden="true"
        width={metadata.width}
        height={metadata.height}
        style={`aspect-ratio: ${metadata.width} / ${metadata.height};`}
      >
      <div class={`blurtop absolute inset-0`} class:hidden={transparency} />
    {/if}
    <picture>
      <img
        class:image={!transparency}
        loading={lazy ? 'lazy' : null}
        src={noscriptSrc} {alt}
        width={metadata.width}
        height={metadata.height}
        style={`aspect-ratio: ${metadata.width} / ${metadata.height};`}
      >
    </picture>
  </noscript>
</div>

<style lang="postcss">
  .clip-blur-up {
    @apply overflow-hidden rounded-[inherit]; /* clipping the blur! */
  }

  .image {
    @apply absolute top-0 left-0;

    &.lazy {
      visibility: hidden;
    }
  }

  .blurtop {
    backdrop-filter: blur(20px);
  }

  img {
    &.blur-up {
      filter: saturate(1.1) contrast(1.2);
      &.loaded {
        /* animation: 240ms cubic-bezier(0.01,0.99,0.01,0.99) 110ms unblur forwards; */
        filter: none;
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
    0% { filter: blur(80px) }
    /* 98% { filter: blur(0px) }
    99% { filter: none } */
    100% { filter: none }
  }

  .image.animated {
    /* animation: 2400ms cubic-bezier(0.01,0.99,0.01,0.99) 110ms fadein forwards; */
    /* opacity: 0; */
    /* animation: 800ms cubic-bezier(0.01,0.99,0.01,0.99) 320ms unblur forwards; */
  }

  @keyframes fadein {
    from { opacity: 0 }
    to { opacity: 1 }
  }
</style>