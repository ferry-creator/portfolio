<div class="relative h-full">
  <div class="box" />
</div>

<style lang="postcss">
  .box {
    background: theme(colors.purple);
    @apply absolute top-[0.8rem];
    
    --box-s: 40px;
    --halfbox: calc(var(--box-s)/2);
    @apply w-[var(--box-s)] h-[5px];
    left: calc(var(--pin-margin) - var(--halfbox));
  }
</style>
