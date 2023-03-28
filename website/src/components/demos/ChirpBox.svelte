<script>
  export let w, h
  export let cx=-1.5, cy=-1.5, r=0.4
  
  import ChirpBox from "./ChirpBox.js"

  let canvas

  import { onMount } from "svelte"
  onMount(() => {
    const ctx = canvas.getContext("2d")
    const props = { cx, cy, radius:r }
    const loopID = ChirpBox(ctx, w, h, props)
    return () => cancelAnimationFrame(loopID)
  })
</script>

<canvas
  bind:this={canvas} height={h}, width={w}
/>

<style>
  canvas {
    image-rendering: pixelated;
    height: inherit;
  }
</style>
