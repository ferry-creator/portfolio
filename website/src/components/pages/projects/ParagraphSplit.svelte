<script>
  export let itemsCenter
</script>

<div class="paragraph-split" class:itemsCenter>
  <div class="paragraph">
    <slot name="paragraph" />
  </div>
  <div class="split">
    <slot name="split" />
  </div>
</div>

<style lang="postcss">
  @media screen(md) {
    .paragraph-split {
      @apply flex items-start;

      &.itemsCenter {
        @apply items-center;
      }
    }

    .paragraph {
      width: var(--text-w);
    }

    .split {
      width: calc(100% - var(--text-w));
    }
  }
</style>