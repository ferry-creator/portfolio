<script>
  import Pin from '$components/Pin.svelte'

  export let parallaxOffset = "0rem"

  let parallax;

  import { onMount } from 'svelte'
  onMount(() => {
    // this is the default tw .md screen size
    // should probably be referenced via tw config, but i'll likely
    // never change the tw default screensizes anyway..
    // had issues importing .cjs tw config file, that's why
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if(!window.chrome && mediaQuery.matches) {
      // polyfill!
      parallax.animate(
        { transform: ['translateY(0)', `translateY(calc(50% + ${parallaxOffset}))`] },
        {
          fill: 'both',
          timeline: new ScrollTimeline({
            source: document.documentElement,
          }),
          rangeStart: new CSSUnitValue(0, 'px'),
          rangeEnd: new CSSUnitValue(100, 'vh'),
        }
      )
    }
  })
</script>

<header
  id="desktop-parallax"
  bind:this={parallax}
  style="--parallaxOffset: {parallaxOffset}"
>
  <span class="absolute top-[calc(var(--sep-height)/2)]
    left-[var(--pin-margin)]">
    <Pin --color="white" />
  </span>
  <span class="absolute top-[calc(var(--sep-height)/2)]
    right-[var(--pin-margin)]">
    <Pin --color="white" />
  </span>
  <slot />
</header>

<style lang="postcss">
  header {
    will-change: transform;
    @apply fixed top-0 w-full;
    @media screen(md) {
      @apply absolute;
    }

    height: var(--split);
    @media screen(md) {
      top: var(--email-height);
      height: calc(100vh - var(--email-height) - var(--sep-height));
    }
    
    background-image: linear-gradient(90deg,
    #E7E7E7 0%,#E7E7E7 3%, #8381F7 46%,
    #9860FF 59%, #CEB0B0 86%, #EAB9FF 100%);

    @apply flex justify-center items-center;
  }

  /* parallax -------------------------- */
  @media screen(md) {
    @supports(animation-timeline: scroll()) {
      #desktop-parallax {
        animation: parallax-effect linear both;
        animation-timeline: scroll(block root);
        animation-range: 0px 100vh;
      }
    }
  }

  @keyframes parallax-effect {
    to { transform: translateY(calc(50% + var(--parallaxOffset))) }
  }
</style>