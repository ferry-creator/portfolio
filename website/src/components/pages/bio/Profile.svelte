<script>
  import Container from '$components/Container.svelte'
  import GoofyAhhMe from '$assets/goofy-ahh-me.png'
  import Placeholder from '$assets/chirp-placeholder.png'
  import ChirpBox from '$components/demos/ChirpBox.svelte'
  import Pin from '$components/Pin.svelte'
  
  let active_canvas1=false, active_canvas2=false
  let canvas2
  const resize = () => {
    const c2_display = getComputedStyle(canvas2).display
    const mobile = c2_display == "none"
    console.log(mobile)
    active_canvas1 = mobile ? true : false
    active_canvas2 = mobile ? false : true
  }

  import { onMount } from 'svelte'
  let js = false
  onMount(() => {
    js = true
    resize()
  })
  
  const getAge = () =>
    Math.floor((new Date() - new Date("1999-03-09"))
    / (365.25*24*60*60*1000));
</script>

<svelte:window on:resize={resize} />

<span class="absolute top-[2rem] right-[var(--pin-margin)]">
  <span class="text-grey hidden xl:contents">
    <Pin --color="currentColor" />
  </span>
</span>
<Container>
  <div class="wrapper">
    <div class="box flex items-center">
      <div class="gradient md:inline-block" />
      <div class="flex-1 h-full mx-[10px] md:hidden">
        {#if !js}
          <img class="placeholder" src={Placeholder}
            alt="chirp signal generative artwork">
        {/if}
        {#if active_canvas1}
          <ChirpBox
            w=24 h=14
            cx=2 cy=-1 r=0.4
          />
        {/if}
      </div>
      <div class="hidden md:inline-block desktop-demo"
        bind:this={canvas2}
      >
        <span>
          {#if active_canvas2}
            <ChirpBox
              w=16 h=24
              cx=2 cy=-1 r=0.4
            />
          {/if}
        </span>
      </div>

      <div class="gradient ml-auto md:hidden" />

      <div class="text">
        <span class="text-grey">
          <h1>
            Jonathan <span class="sm:hidden"><br></span>
            Segefjord<br>
          </h1>
          <span class="relative">
            {getAge()}
            <span class="tracking-[-5px]">y</span>
            <span class="tracking-[-2px]">/o</span>
          </span>
        </span>
        <br class="hidden md:inline">
        <br>
        <span class="text-[1.45em] leading-[1.4em] md:leading-[inherit]">
          creative developer
        </span>
      </div>

    </div>
    <img class="goofy" src={GoofyAhhMe} alt="Goofy Jonathan Segefjord">
  </div>
</Container>

<style lang="postcss">
  .wrapper {
    /* background: rgba(0,0,0,0.3); */
    color: white;
    height: inherit;
    @apply relative;
    .box {
      background: theme(colors.greyDarker);
      padding: 10px;
      @apply absolute top-[25px];
      @apply left-0 right-0 bottom-0;

      .text {
        @apply absolute right-[30px];
        text-align: right;
        font-family: "PPNeueBit";
        font-size: 1.6rem;
        line-height: 1.4rem;
        mix-blend-mode: exclusion;
      }

      .gradient {
        height: 100%;
        width: calc(var(--page-margin)/2);
        background-image: linear-gradient(0deg, #E7E7E7 0%,
        #E7E7E7 6%, #8381F7 46%, #9860FF 68%, #EAB9FF 100%);
      }
    }

    .placeholder {
      height: 100%;
      image-rendering: pixelated;
      /* @apply absolute top-[10px]; */
    }
    
    .goofy {
      @apply absolute top-0 h-[70%] left-[3rem];
      animation: wacka 200ms alternate infinite linear;
    }
    @keyframes wacka {
      from{transform: rotate(-2deg)}
      to  {transform: rotate(2deg)}
    }
  }

  @media screen(md) {
    .wrapper {
      background: theme(colors.greyDarker);
      padding: calc(var(--page-margin)/2);
      max-width: 315px;
      .box {
        display: contents;

        .gradient, .desktop-demo {
          padding-top: 125%;
        }
        .desktop-demo {
          background: white;
          @apply relative left-[calc(var(--page-margin)/2)];
          span {
            @apply absolute top-0 h-[95%];
          }
        }

        .text {
          @apply static;
          text-align: left;
          @media screen(lg) {
            font-size: 200%;
            line-height: 100%;
          }
        }
      }
      .goofy {
        @apply absolute bottom-[8rem] h-[32%] right-[5%];
        top: auto;
        left: auto;
      }
    }
    @keyframes wacka {
      from{transform: rotate(-7deg)}
      to  {transform: rotate(-4deg)}
    }
  }
</style>
