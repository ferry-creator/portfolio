<script>
  import Pin from '$components/Pin.svelte'
</script>

<div>
  <span class="left-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
  <div class="line" />
  <span class="right-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
</div>

<style lang="postcss">
  div {
    color: theme(colors.grey);
    height: 23px;
    @apply flex justify-between items-center;
    span { @apply relative }
  }
  .line {
    height: 3px;
    width: calc(100vw - var(--pin-margin)*6);
    max-width: 85rem;
    background: currentColor;
  }
</style>
