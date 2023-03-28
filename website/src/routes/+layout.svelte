<script>
  import '../app.postcss';
  import '$theme/fonts/index.scss'
  import EmailScroller from '$components/EmailScroller.svelte'
  import Navigation from '$components/Navigation/index.svelte'
</script>

<div class="parallax-wrapper">
  <slot/>
</div>
<div class="navigation-layout">
  <div class="navigation">
    <Navigation />
  </div>
  <div class="email-scroller">
    <EmailScroller />
  </div>
</div>

<style lang="postcss">
  .navigation-layout {
    @apply fixed w-[100%] bottom-0;
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

  @media screen(md) {
    .parallax-wrapper {
      position: relative;
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      perspective: 10px;
    }
  }
</style>
