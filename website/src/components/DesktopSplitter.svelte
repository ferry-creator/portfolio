<div>
  <slot />
</div>

<style lang="postcss">
  div {
    /* display: contents; */
    @media screen(md) {
      @apply pt-[var(--top)];
      @apply flex;
      &> :global(*:last-child) {
        width: 150%;
      }
      &> :global(*:first-child) {
        width: 100%;
      }
    }
    @media screen(lg) {
      &> :global(*:last-child) {
        width: 200%;
      }
      &> :global(*:first-child) {
        width: 100%;
      }
    }
    max-width: 80rem;
    @apply mx-auto;
  } 
</style>
