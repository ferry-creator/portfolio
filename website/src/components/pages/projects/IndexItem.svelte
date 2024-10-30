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


  export let title, year, link = null, flairs

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

  let flairsMobileVisibility = flairs.map(x => false)
  let flairsElement
  import { onMount } from 'svelte'
  onMount(() => {
    let index = 0
    for(const child of flairsElement.children) {
      const viewportWidth = document.documentElement.clientWidth
      const elementPosition = child.getBoundingClientRect().right
      const offset = 5
      const threshold = viewportWidth - elementPosition - offset
      flairsMobileVisibility[index] = 0 < threshold
      index++
    }
  })
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
                    <img src={itemIcon} alt="Close Icon" class="relative">
                    <div class="md:ml-0 ml-1.5">
                      <span class="year md:mr-3 mr-2.5 bg-blur">
                        {year}
                      </span>
                      {#if link}
                        <a
                          class="mr-3 hidden md:block"
                          href={link} target="_blank"
                          on:click|stopPropagation
                        >
                          Link
                        </a>
                      {/if}
                      <slot name="thumbnail" />
                      <span class="title ml-1 md:ml-1.5 bg-blur">
                        {title}
                      </span>
                      <ul class="md:ml-4 ml-2.5 flairs">
                        {#each flairs as { text, color }, i}
                          <li class={color} class:showMobile={flairsMobileVisibility[i]}>
                            <span>{text}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  </div>
                </button>
              {/if}
              <div class="details-accordion">
                <Accordion on:open={onOpen} on:open on:close bind:this={accordion}>
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
                      {#if link}
                        <a
                          class="mr-3 hidden md:block"
                          href={link} target="_blank"
                          on:click|stopPropagation
                        >
                          Link
                        </a>
                      {/if}
                      <slot name="thumbnail" />
                      <span class="title ml-1 md:ml-1.5">
                        {title}
                      </span>
                      <ul class="md:ml-4 ml-2.5 flairs" bind:this={flairsElement}>
                        {#each flairs as { text, color }, i}
                          <li class={color} class:showMobile={flairsMobileVisibility[i]}>
                            <span>{text}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  </div>
                  <div slot="content" class="pt-[.4rem]">
                    {#if showStickySummary}
                      <slot name="details" />
                    {/if}
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
  @keyframes open{
    from {
      transform: scale(1.3) rotate(0deg);
    }
    to {
      transform: scale(1) rotate(95deg);
    }
  }

  .sticky-summary .summary > img {
    animation: open 50ms ease forwards;
  }

  .summary:active > img {
    transform: scale(0.8) rotate(0deg);
  }

  .sticky-summary:active .summary > img {
    transform: scale(0.8) rotate(95deg) !important;
  }

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
        @apply relative bottom-[-1px];
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
          @apply mr-1;
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

          @apply opacity-0 sm:opacity-100;
          &.showMobile {
            @apply opacity-100;
          }
        }
      }
    }
  }

  .box, .line {
    background: theme(colors.purple);
    @apply absolute top-[0.4rem];
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
      padding-bottom: 0.5rem;
    }
  }

  .bg-blur {
    filter:
      drop-shadow(0 0 5px theme(colors.void))
      drop-shadow(0 0 8px #e7e7e7)
      drop-shadow(30px 0 12px #e7e7e7)
      drop-shadow(-30px 0 12px #e7e7e7)
      drop-shadow(0 0 20px #e7e7e7)
    ;
  }

  .sticky-summary > .summary > div :global(img) {
    @apply relative z-[1];
  }
</style>
