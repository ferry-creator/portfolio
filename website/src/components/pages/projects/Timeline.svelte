<script>
  // export let projects

  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'
</script>

{#each Array(2) as NULL}
<div class="project relative h-full">
  <div class="box" />
  <div class="line"/>
  <Container>
    <div class="content">
      <ContentBox full>
        <h4>2022</h4>
        <div class="text-body">
          <h3>shelly.run</h3>
          <div class="paragraph-img">
            <div class="paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="pin-line"/>
              <span class="phone-pin">
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
{/each}

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
      @apply text-5xl;
      font-family: "PPNeueBit";
    }
    p {
      @apply leading-tight;
      padding-right: 5rem;
      max-width: 35rem;
    }
    .paragraph {
      min-height: 10rem;
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
      margin-bottom: 4rem;
      img {
        margin-top: 1rem;
      }
    }
  }

  .project:last-child .content {
    .text-body {
      margin-bottom: 1rem;
    }
  }
</style>
