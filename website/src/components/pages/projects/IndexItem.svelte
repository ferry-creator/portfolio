<script>
  import { id, activeId } from './Project.svelte'
  const componentId = $id++

  let closeButton
  $: if($activeId != componentId) {
    if(showStickySummary) {
      // setTimeout(() => {
      //   closeButton.click()
      // }, 100)
    }
  }


  export let title, year, link, flairs

  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Accordion from '$components/Accordion.svelte'
  import PSplitTextW from "./PSplitTextW.svelte"

  import itemIcon from '$gfx/skeuo-icons/Next-alt2.png'

  let summaryElement

  let showStickySummary = false
  const onOpen = (e) => {
    showStickySummary = true
    $activeId = componentId
  }

  let accordion
  const onClose = (e) => {
    showStickySummary = false
    accordion.onClick(e)
    
    // scroll page back by the deeper into reading details
    const scrollbackStart = 120
    const scrollbackEnd   = -50
    const a = (0 - 1) / (scrollbackStart - scrollbackEnd)
    const b = -(a * scrollbackStart)
    const f = (x) => (a * x) + b // linear interpolation, 0 <-> 1
    const lerp = (x) => Math.max(0, Math.min(f(x), 1))
    const summaryPosition = summaryElement.getBoundingClientRect().top
    if(summaryPosition <= scrollbackStart) {
      const scrollback = (summaryPosition - 200) * lerp(summaryPosition)
      window.scrollTo({
        top: window.scrollY + scrollback,
        behavior: "smooth",
      })
    }
  }
</script>

<div class="project relative h-full">
  <div class="box" />
  <div class="line"/>
  <Container>
    <div class="content">
      <ContentBox full>
        <PSplitTextW>
          <div class="text-body md:relative">
            <div class="relative">
              {#if showStickySummary}
                <button class="sticky-summary" on:click={onClose} bind:this={closeButton}>
                  <div class="summary">
                    <img src={itemIcon} alt="Close Icon" class="transform rotate-[95deg]">
                    <div class="md:ml-0 ml-1.5">
                      <span class="year md:mr-3 mr-2.5">
                        {year}
                      </span>
                      <a
                        class="mr-3 hidden md:block"
                        href={link} target="_blank"
                        on:click|stopPropagation
                      >
                        Link
                      </a>
                      <slot name="thumbnail" />
                      <span class="title ml-1 md:ml-1.5">
                        {title}
                      </span>
                      <ul class="md:ml-4 ml-2.5 flairs">
                        {#each flairs as { text, color }}
                          <li class={color}>
                            <span>{text}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  </div>
                </button>
              {/if}
              <div class="details-accordion">
                <Accordion on:open={onOpen} bind:this={accordion}>
                  <div
                    slot="summary" class="summary"
                    class:opacity-0={showStickySummary}
                    bind:this={summaryElement}
                  >
                    <img src={itemIcon} alt="Open Icon">
                    <div class="md:ml-0 ml-1.5">
                      <span class="year md:mr-3 mr-2.5">
                        {year}
                      </span>
                      <a
                        class="mr-3 hidden md:block"
                        href={link} target="_blank"
                        on:click|stopPropagation
                      >
                        Link
                      </a>
                      <slot name="thumbnail" />
                      <span class="title ml-1 md:ml-1.5">
                        {title}
                      </span>
                      <ul class="md:ml-4 ml-2.5 flairs">
                        {#each flairs as { text, color }}
                          <li class={color}>
                            <span>{text}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  </div>
                  <div slot="content" class="pt-[.4rem]">
                    <slot name="details" />
                  </div>
                </Accordion>
              </div>
            </div>

          </div>
        </PSplitTextW>
      </ContentBox>
    </div>
  </Container>
</div>

<style lang="postcss">
  .sticky-summary {
    @apply block w-full text-left;
    user-select: none;
    display: block;
    position: sticky;  
    top: calc(var(--sep-height) - 0.8rem);
    @media screen(md) {
      top: calc(var(--email-height) + var(--sep-height) - 0.8rem);
    }
    z-index: 1;

    & > div  {
      @apply absolute;
      /* @apply bg-void/100; */
      @apply bg-gradient-to-b from-void/100 to-void/10;
      backdrop-filter: blur(20px);

      width: 100%;
      top: -1px;
      padding-top: 1px;
      padding-bottom: 0.68rem;
    }

    .summary::after {
      content: '';
      display: block;
      @apply absolute inset-0;
      /* background: red; */
      border-bottom: 5px solid greenyellow;
    }

    & > * > span {
      filter:
        drop-shadow(0 0 5px theme(colors.void))
        drop-shadow(0 0 8px #e7e7e7)
        drop-shadow(30px 0 12px #e7e7e7)
        drop-shadow(-30px 0 12px #e7e7e7)
        drop-shadow(0 0 20px #e7e7e7)
      ;
    }

    .close-text {
      @apply text-base;
    }
  }

  .details-accordion :global(summary) {
    @media screen(md) {
      /* display: inline;
      padding-right: 4rem; */
    }
  }

  .summary {
    @apply flex;
    & > * {
      flex-shrink: 0;
    }

    @media screen(md) {
      @apply block;
    }
    & > img {
      @apply inline w-[26px] relative bottom-[2px] z-[1] shrink-0;
    }

    & > div {
      @apply inline-flex items-center;
      .year {
        font-family: "PPFraktionMono";
        @apply text-lg font-bold text-greyDark tracking-tighter;
        @apply relative bottom-[-1px] z-[1];
      }
      & > :global(img) {
        @apply w-[27px];
      }
      .title {
        @apply text-grey;
        text-wrap: nowrap;
      }
      a {
        @apply text-sm font-medium text-greyDarker;
        background: greenyellow;
        border-bottom: dotted 2px black;
        @apply px-2;
        &:hover, &:active {
          background: theme(colors.purple);
          color: white;
        }

        @apply relative z-[1];
        &:after {
          content: '';
          display: block;
          @apply absolute w-full h-4 -bottom-1.5 -left-1.5;
          background-image: url('$gfx/skeuo-icons/link-128x128.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      ul.flairs {
        @apply flex;
        li:not(:last-child) {
          @apply mr-0.5 md:mr-1;
        }

        li {
          text-wrap: nowrap;
          @apply px-[0.35rem] py-[0.07rem] rounded-full;
          @apply text-[white] text-xs font-medium tracking-tighter;
          @media screen(md) {
            @apply px-[0.55rem];
            @apply text-sm tracking-normal;
            span {
              @apply relative bottom-[0.05rem];
            }
          }

          @apply bg-purple;
          &.orange { background: #f75600 }
          &.pink   { background: #ff00ff }
          &.black  { background: #232323 }
          &.blue   { background: #00aeff }
          &.yellow { background: #eac300 }
          &.green { background: #00ba54 }

          @apply relative;
          &::before {
            content: '';
            @apply block absolute inset-0;
            @apply rounded-full;
            @apply bg-gradient-to-b from-[white]/100 via-[white]/30 to-[white]/0;
            opacity: 50%;
          }
          &::after {
            content: '';
            @apply block absolute inset-0;
            @apply rounded-full;
            @apply h-[55%] top-[0.1rem] left-[0.2rem] right-[0.22rem];
            @apply bg-gradient-to-b from-[white]/80 to-[white]/30;
            opacity: 25%;
          }
        }
      }
    }
  }

  .box, .line {
    background: theme(colors.purple);
    @apply absolute top-[0.25rem];
  }
  .box {
    --box-s: 12px;
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
      padding-bottom: 0.5rem;
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
</style>
