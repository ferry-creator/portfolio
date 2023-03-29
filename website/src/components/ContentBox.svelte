<div>
  <slot/>
</div>

<style>
  div {
    color: theme(colors.greyText);
    @apply mx-auto;
    max-width: 14.7rem;
    text-align: justify;
    
    @media screen(md) {
      max-width: 32rem;
      @apply px-[5rem];
    }
  }
</style>
