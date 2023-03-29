<div>
  <slot />
</div>

<style>
  div {
    /* display: contents; */
    @media screen(md) {
      @apply pt-[var(--top)];
      @apply flex;
      &> :global(*:last-child) {
        width: 200%;
      }
      &> :global(*:first-child) {
        width: 100%;
      }
    }
  } 
</style>
