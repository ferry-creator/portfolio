<script>
  import segefjord from "$gfx/segefjord.svg?src"
  import Pin from '$components/Pin.svelte'
</script>

<div class="_container">
  <div class="bg" />

  <span class="relative left-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
  <span class="relative text-greyText">
    {@html segefjord}
  </span>
  <!-- <span class="md:hidden">  
  </span> -->
  <span class="relative right-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
</div>

<style lang="postcss">
  ._container {
    color: theme(colors.grey);
    height: var(--sep-height);
    /* background: rgba(0,255,0,0.2); */
    @apply flex justify-between items-center;
    @apply relative;
    .bg {
      @apply absolute top-0 left-0 right-0;
      bottom: 0.8rem;
      background: theme(colors.void);
    }
  }
</style>
