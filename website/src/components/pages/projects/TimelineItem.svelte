<script>
  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import PSplitTextW from "./PSplitTextW.svelte"
</script>

<div class="project relative h-full">
  <div class="line"/>
  <Container>
    <div class="content">
      <ContentBox full>
        <PSplitTextW>
          <div class="text-body">
            <slot />
          </div>
        </PSplitTextW>
      </ContentBox>
    </div>
  </Container>
</div>

<style lang="postcss">
  .line {
    background: theme(colors.purple);
    @apply absolute top-[0.25rem];
  }
  .line {
    width: 4px;
    bottom: -15px;
    left: calc(var(--pin-margin) - 2px);
  }
  .content {
    @apply relative;
    :global(p) {
      @apply leading-tight;
      padding-right: 5rem;
      max-width: 35rem;
      @media screen(md) {
        @apply max-w-none pr-0;
      }
    }
    .text-body {
      position: relative;
      top: -4px;

      padding-left: 2.5rem;
    }
  }
</style>
