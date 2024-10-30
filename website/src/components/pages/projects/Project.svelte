<script context="module">
	export let tagModals = {}

  import { writable } from 'svelte/store'
  export const activeId = writable(0)
  export const id = writable(0)
</script>

<script>
  const componentId = $id++
  
  let closeButton
  $: if($activeId != componentId) {
    if(showStickySummary) {
      // setTimeout(() => {
      //   closeButton.click()
      // }, 100)
    }
  }

  export let title, year, img, link, techstack

  import Container from '$components/Container.svelte'
  import Image from '$components/Image.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'
  import Accordion from '$components/Accordion.svelte'
  import PSplitTextW from "./PSplitTextW.svelte"
  import ParagraphSplit from './ParagraphSplit.svelte'

  import info from '$gfx/skeuo-icons/Info-alt-shadowless.png'
  import close from '$gfx/skeuo-icons/Delete-alt.png'

  let titleElement
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
      const titlePosition   = titleElement.getBoundingClientRect().top
      const scrollback = (summaryPosition - 200) * lerp(summaryPosition)
      window.scrollTo({
        top: window.scrollY + scrollback,
        behavior: "smooth",
      })
    }
  }

  // import Modal from '$components/Modal.svelte'
  // let modals = {}
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
            <h3 id={title} bind:this={titleElement}>{title}</h3>
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
                      <button on:click={tagModals[tag].open}>
                        <span>{tag}</span>
                      </button>
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
              <div slot="split" class="img-link relative">
                <a href={link} target="_blank">
                  <!-- <img src={img} alt={title}> -->
                   <div class="mt-[2rem] md:mt-[4.5rem]">
                    <Image src={img} alt={title} thumbhash />
                   </div>
                </a>
                <slot name="img-extras" />
              </div>
            </ParagraphSplit>
            <div class="mt-3 relative">
              {#if showStickySummary}
                <button class="sticky-summary" on:click={onClose} bind:this={closeButton}>
                  <div class="summary">
                    <!-- <img src={info} alt="Open Icon"> -->
                    <img src={close} alt="Close Icon">
                    <span>
                      DETAILS
                      <span class="ml-1 text-grey">
                        {title}
                      </span>
                    </span>
                    <!-- <img src={close} alt="Close Icon" class=""> -->
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
                    <img src={info} alt="Open Icon">
                    <span>
                      DETAILS
                    </span>
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

<!-- <Modal bind:this={modals['Startup']}>
  Startup
</Modal>

<Modal bind:this={modals['AI']}>
  AI
</Modal> -->

<slot name="tag-modals" />

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

      & > span {
        @apply font-sans tracking-normal font-normal text-sm relative bottom-[0.12rem];
      }
    }

    .close-text {
      @apply text-base;
    }
  }

  .details-accordion :global(summary) {
    @media screen(md) {
      /* display: inline; */
      padding-right: 4rem;
    }
  }

  .summary {
    font-family: "PPFraktionMono";
    @apply text-lg font-bold text-greyDark tracking-tighter;

    img {
      @apply inline w-[26px] relative bottom-[2px] z-[1];
    }

    &:active img {
      @apply transform scale-[1.15];
    }
  }

  .box, .line {
    background: theme(colors.purple);
    @apply absolute top-[0.25rem];
    /* z-index: 20; */
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
      @apply m-0 mr-[0.5rem] mt-[0.5rem];

      span {
        background: theme(colors.purple);
        color: white;
        font-family: "PPFraktionMono";
        @apply px-[0.2rem] pb-[0.3rem] pt-[0.1rem];

        &:hover, &:active {
          color: black;
          background: greenyellow;
        }
      }
    }
  }
</style>
