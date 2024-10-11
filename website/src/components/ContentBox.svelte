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
      @media screen(md) {
        @apply px-0;
      }
    }

    :global(p span) {
      color: theme(colors.purple);
      font-weight: bold;
    }
    :global(p a) {
      color: black;
      background: greenyellow;
      border-bottom: dotted 2px black;
      /* animation: 150ms link-blink infinite; */
      &:hover, &:active {
        background: theme(colors.purple);
        color: white;
      }

      /* @apply relative;
      &:after {
        content: '';
        display: block;
        @apply absolute w-full h-4 -bottom-2 -left-1.5;
        background-image: url('$gfx/skeuo-icons/link-128x128.png');
        background-size: contain;
        background-repeat: no-repeat;
      } */
    }

    @keyframes link-blink {
      to {
        border-bottom: none;
      }
    }
  }
</style>
