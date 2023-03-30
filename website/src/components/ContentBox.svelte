<script>
  export let full = false
</script>

<div class:full>
  <slot/>
</div>

<style lang="postcss">
  div {
    color: theme(colors.greyText);
    @apply mx-auto;
    max-width: 14.7rem;
    text-align: justify;
    
    @media screen(md) {
      max-width: 32rem;
      @apply px-[5rem];
    }

    &.full {
      max-width: none;
    }

    :global(p span) {
      color: theme(colors.purple);
      font-weight: bold;
    }
    :global(p a) {
      border-bottom: dotted 2px black;
      &:hover {
        background: greenyellow;
        color: black;
      }
    }
  }
</style>
