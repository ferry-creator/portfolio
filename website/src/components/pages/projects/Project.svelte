<script>
  export let title, year

  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'
</script>

<div class="project relative h-full">
  <div class="box" />
  <div class="line"/>
  <Container>
    <div class="content">
      <ContentBox full>
        <h4 class="md:hidden">{year}</h4>
        <div class="text-body md:relative">
          <h3>{title}</h3>
          <span class="desktop-pin hidden md:block">
            <Pin --color="currentColor" />
          </span>
          <span class="desktop-pin desktop-pin2 hidden md:block">
            <Pin --color="currentColor" />
          </span>
          <div class="paragraph-img">
            <div class="paragraph">
              <h4 class="hidden md:block">{year}</h4>
              <div class="pin-line desktop-line hidden md:block"></div>
              <p>
                <slot />
              </p>
              <div class="pin-line md:hidden"/>
              <span class="phone-pin md:hidden">
                <Pin --color="currentColor" />
              </span>
            </div>
            <img src="/projects/shelly-run.png" alt="shelly.run project">
          </div>
        </div>
      </ContentBox>
    </div>
  </Container>
</div>

<style lang="postcss">
  .box, .line {
    background: theme(colors.purple);
    @apply absolute top-[0.8rem];
  }
  .box {
    --box-s: 20px;
    --halfbox: calc(var(--box-s)/2);
    @apply w-[var(--box-s)] h-[var(--box-s)];
    left: calc(var(--pin-margin) - var(--halfbox));
  }
  .line {
    width: 4px;
    bottom: -15px;
    left: calc(var(--pin-margin) - 2px);
  }
  .content {
    @apply relative;
    h4 {
      @apply text-5xl;
      @apply absolute top-0 right-0;
      transform-origin: top right;
      transform: rotate(-90deg) translate(-0.8rem, -75%);
      color: theme(colors.grey);
      font-family: "PPMondwest";
    }
    h3 {
      text-align: left;
      word-spacing: 0.2em;
      @apply text-5xl;
      font-family: "PPNeueBit";
    }
    p {
      @apply leading-tight;
      padding-right: 5rem;
      max-width: 35rem;
      @media screen(md) {
        @apply max-w-none pr-0;
      }
    }
    .paragraph {
      min-height: 10rem;
      @media screen(md) {
        min-height: auto;
      }
      @apply relative;
      .phone-pin {
        color: theme(colors.grey);
        position: absolute;
        right: calc(var(--pin-margin)
          - var(--page-margin));
        bottom: 1rem;
      }
      .pin-line {
        --bottom: calc(1rem + 25px);
        background: theme(colors.grey);
        height: calc(100% - var(--bottom) - 4.7rem);
        width: 3px;
        position: absolute;
        bottom: var(--bottom);
        right: calc(var(--pin-margin)
          - var(--page-margin) - 1.5px);
      }
    }
    .text-body {
      padding-left: 2.5rem;
      padding-bottom: 64px;
      img {
        margin-top: 1rem;
      }
    }
  }

  .project:last-child .content {
    .text-body {
      padding-bottom: 16px;
    }
  }

  @media screen(md) {
    .content {
      --text-w: 15rem;
      .paragraph-img {
        @apply flex;
      }

      h3, .paragraph {
        width: var(--text-w);
      }
      .text-body {
        padding-left: 3rem;
        padding-bottom: 96px;
        img {
          margin-top: 3.15rem;
          padding-left: 4rem;
          width: calc(100% - var(--text-w));
        }
      }

      .desktop-pin {
        color: theme(colors.grey);
        @apply absolute top-[1.2rem] right-0;
      }
      .desktop-pin2 {
        left: calc(var(--text-w) + 5.5rem)
      }
      .desktop-line {
        top: 0;
        left: 1rem;
        height: 2.8rem !important;
      }

      .paragraph h4 {
        transform: none;
        text-align: right;
        @apply relative top-[-0.6rem];
      }
    }
  }

  @media screen(lg) {
    .content .desktop-pin {
      right: -1.3rem;
    }
  }
</style>
