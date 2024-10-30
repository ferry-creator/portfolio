<script>
  export let thumbnail = null
  export let controls = null, autoplay = null, loop = null, playsinline = null
  export let wfull, hfull

  export let video
  // import { onMount } from "svelte"
  // onMount(() => {
  //   if(autoplay) {
  //     video.play()
  //   }
  // })
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Video.svelte:9  Uncaught (in promise)
  // NotAllowedError: play() failed because
  // the user didn't interact with the document first.

  function lockOrientation() {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(function(error) {
        console.log('Orientation lock failed:', error);
      });
    }
  }

  // Function to unlock orientation
  function unlockOrientation() {
    if (screen.orientation && screen.orientation.unlock) {
      screen.orientation.unlock();
    }
  }
</script>

<svelte:options accessors/>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  bind:this={video}
  poster={thumbnail}
  {controls} {loop} {playsinline}
  disablepictureinpicture
  preload="metadata"
  class:w-full={wfull} class:h-full={hfull}
  on:fullscreenchange={() => {
    if (document.webkitFullscreenElement) {
      lockOrientation();
    } else {
      unlockOrientation();
    }
  }}
>
  <slot />
  Your browser does not support HTML5 Video :(
</video>

<style lang="postcss">
  /* video {
    @media (orientation: portrait) {
      @apply transform rotate-90;
    }
    @media screen(md) or (orientation: landscape) {
      @apply transform-none;
    }
  } */
</style>