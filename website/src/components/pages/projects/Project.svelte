<script>
  export let title, year, img, link, techstack

  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'
  import Accordion from '$components/Accordion.svelte'
  import PSplitTextW from "./PSplitTextW.svelte"
  import ParagraphSplit from './ParagraphSplit.svelte'

  import info from '$gfx/skeuo-icons/Info-alt-shadowless.png'
</script>

<!-- <div class="w-[100vw] absolute left-0">
  <span class="desktop-pin desktop-pin3 hidden md:block xl:hidden">
    <Pin --color="currentColor" />
  </span>
</div> -->
<div class="project relative h-full">
  <div class="box" />
  <div class="line"/>
  <Container>
    <div class="content">
      <ContentBox full>
        <PSplitTextW>
          <h4 class="md:hidden">{year}</h4>
          <div class="text-body md:relative">
            <h3 id={title}>{title}</h3>
            <span class="desktop-pin hidden md:block">
              <Pin --color="currentColor" />
            </span>
            <span class="desktop-pin desktop-pin2 hidden md:block">
              <Pin --color="currentColor" />
            </span>
            <ParagraphSplit>
              <div slot="paragraph" class="paragraph">
                <h4 class="hidden md:block">{year}</h4>
                <div class="pin-line desktop-line hidden md:block"></div>
                <ul class="tag-cloud mt-3">
                  {#each techstack as tag}
                  <li>
                    <a href="#">#{tag}</a>
                  </li>
                  {/each}
                </ul>
                <p class="mt-5">
                  <slot />
                </p>
                <div class="pin-line md:hidden"/>
                <span class="phone-pin md:hidden">
                  <Pin --color="currentColor" />
                </span>
              </div>
              <div slot="split" class="img-link">
                <a href={link} target="_blank">
                  <img src={img} alt="shelly.run project">
                </a>
              </div>
            </ParagraphSplit>
            <!-- <div class="paragraph-img">
              <div class="paragraph">
                <h4 class="hidden md:block">{year}</h4>
                <div class="pin-line desktop-line hidden md:block"></div>
                <ul class="tag-cloud mt-3">
                  {#each techstack as tag}
                  <li>
                    <a href="#">#{tag}</a>
                  </li>
                  {/each}
                </ul>
                <p class="mt-5">
                  <slot />
                </p>
                <div class="pin-line md:hidden"/>
                <span class="phone-pin md:hidden">
                  <Pin --color="currentColor" />
                </span>
              </div>
              <a href={link} target="_blank" class="img-link">
                <img src={img} alt="shelly.run project">
              </a>
            </div> -->

            <div class="mt-3 relative">
              <Accordion>
                <div slot="summary" class="summary sticky top-[100px] z-[10000000000000000]">
                  <img src={info} alt="Info Icon" class="inline w-[26px] relative bottom-[2px]">
                  DETAILS
                </div>
                <div slot="content" class="pt-[.4rem]">
                  <slot name="details" />
                </div>
              </Accordion>
            </div>
          </div>
        </PSplitTextW>
      </ContentBox>
    </div>
  </Container>
</div>

<style lang="postcss">
  .summary {
    font-family: "PPFraktionMono";
    @apply text-lg font-bold text-greyDark tracking-tighter;
    /* @apply bg-[greenyellow]; */
  }

  .box, .line {
    background: theme(colors.purple);
    @apply absolute top-[0.25rem];
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
      @apply text-5xl leading-[0.7em];
      font-family: "PPNeueBit";
      margin-right: 3rem;
    }
    :global(p) {
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
        right: calc(var(--pin-margin) - var(--page-margin));
        bottom: 1rem;
      }
      .pin-line {
        --bottom: calc(1rem + 25px);
        background: theme(colors.grey);
        height: calc(100% - var(--bottom) - 4.7rem);
        width: 3px;
        position: absolute;
        bottom: var(--bottom);
        right: calc(var(--pin-margin) - var(--page-margin) - 1.5px);
      }
    }
    .text-body {
      position: relative;
      top: -4px;

      padding-left: 2.5rem;
      padding-bottom: 3rem;
      .img-link img {
        margin-top: 2rem;
      }
    }
  }

  .project:last-child .content {
    .text-body {
      /* padding-bottom: 16px; */
    }
  }

  @media screen(md) {
    .desktop-pin {
      color: theme(colors.grey);
      @apply absolute top-[1rem] right-0;
    }
    .desktop-pin2 {
      left: calc(var(--text-w) + 5.5rem);
      /* display: none; */
    }
    .desktop-pin3 {
      top: 12px;
      right: calc(-0.5px + var(--pin-margin) + var(--page-margin)/2);
    }
    .content {
      padding-right: 14px;

      h3 {
        width: var(--text-w);
      }
      .text-body {
        padding-left: 3rem;
        /* padding-bottom: 96px; */
        .img-link {
          padding-left: 4rem;
          img {
            margin-top: 4.5rem;
          }
        }
      }

      .desktop-line {
        top: 0.5rem;
        left: 1rem;
        height: 3rem !important;
      }

      .paragraph h4 {
        transform: none;
        text-align: right;
        @apply relative top-[-0.25rem];
      }
    }
  }

  @media screen(lg) {
    .content .desktop-pin {
      right: -1.3rem;
    }
  }

  .tag-cloud {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    li {
      @apply inline-block;
      @apply mr-[0.5rem] mt-[0.5rem];
    }
    a {
      background: theme(colors.purple);
      color: white;
      font-family: "PPFraktionMono";
      /* @apply text-lg; */
      @apply px-[0.2rem] pb-[0.3rem] pt-[0.1rem];

      &:hover, &:active {
        color: black;
        background: greenyellow;
      }
    }
  }
</style>
