<script>
  import '../app.postcss';
  import '$theme/fonts/index.scss'
  import ImageLoader from '$components/ImageLoader.svelte'

  import EmailScroller from '$components/EmailScroller.svelte'
  import Navigation from '$components/Navigation/index.svelte'
</script>

<ImageLoader />

<div class="navigation-layout">
  <div class="navigation">
    <Navigation />
  </div>
  <div class="email-scroller">
    <EmailScroller />
  </div>
</div>
<slot/>

<style lang="postcss">
  .navigation-layout {
    z-index: 999999999999999999999;
    @apply fixed w-full bottom-0;
  }

  @media screen(md) {
    .navigation-layout {
      @apply top-0 bottom-auto;
      @apply flex;
    }
    .navigation    {@apply w-[100%]}
    .email-scroller{@apply w-[50%] overflow-x-hidden}

    .navigation-layout {
      background: white;
      padding-bottom: 2px;
    }
  }

</style>
