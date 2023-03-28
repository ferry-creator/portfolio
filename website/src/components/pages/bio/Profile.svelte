<script>
  import Container from '$components/Container.svelte'
  import GoofyAhhMe from '$assets/goofy-ahh-me.png'
  import Placeholder from '$assets/chirp-placeholder.png'
  import ChirpBox from '$components/demos/ChirpBox.svelte'

  import { onMount } from 'svelte'
  let js = false
  onMount(() => { js = true })
  
  const getAge = () =>
    Math.floor((new Date() - new Date("1999-03-09"))
    / (365.25*24*60*60*1000));
</script>

<Container>
  <div class="wrapper">
    <div class="box flex items-center">
      <div class="gradient" />
      <div class="flex-1 h-full mx-[10px]">
        {#if !js}
          <img class="placeholder" src={Placeholder}
            alt="chirp signal generative artwork">
        {/if}
        <ChirpBox
          w=24 h=14
          cx=2 cy=-1 r=0.4
        />
      </div>
      <div class="gradient ml-auto" />

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
        <br>
        <span class="text-[1.45em] leading-[1.4em]">
          creative developer
        </span>
      </div>

    </div>
    <img class="goofy" src={GoofyAhhMe} alt="Goofy Jonathan Segefjord">
  </div>
</Container>

<style lang="postcss">
  .wrapper {
    --offset: 25px;
    /* background: rgba(0,0,0,0.3); */
    color: white;
    height: inherit;
    @apply relative;
    .box {
      background: theme(colors.greyDarker);
      padding: 10px;
      @apply absolute top-[var(--offset)];
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
</style>
