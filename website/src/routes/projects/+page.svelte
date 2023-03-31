<script>
  import Footer from '$components/Footer.svelte'
  import Graph from '$gfx/Graph.svg'
  import Pin from '$components/Pin.svelte'
  import LogoSeperator from '$components/LogoSeperator.svelte'
  import Hacker from '$assets/hackerpose.png'
  import Project from '$components/pages/projects/Project.svelte'
</script>

<div class="container-3d">
  <header>
    <span class="absolute top-[calc(var(--sep-height)/2)]
      left-[var(--pin-margin)]">
      <Pin --color="white" />
    </span>
    <span class="absolute top-[calc(var(--sep-height)/2)]
      right-[var(--pin-margin)]">
      <Pin --color="white" />
    </span>
    <div class="content">
      <div class="graph">
        <img src={Graph} alt="graph.svg">
      </div>
      <div class="projectstext">
        <span>projects.</span>
      </div><br>
      <div class="shit">
        <span>
          Shit I created
          <br>{`:-)`}
        </span>
        <div class="mostly">
          . . . and mostly finished
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="logoseperator">
      <LogoSeperator />
    </div>
    <div class="max-w-[60rem] mx-auto">
      <div class="mt-[3rem]">
        <Project title="shelly.run" year=2022>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Project>
        <Project title="shelly.run" year=2022>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Project>
      </div>
      <div class="hackerimg mt-[5rem]">
        <span class="left-[var(--pin-margin)]">
          <Pin --color="white" />
        </span>
        <span class="right-[var(--pin-margin)]">
          <Pin --color="white" />
        </span>
        <img src={Hacker}
          alt="Jonathan posing as a hacker">
        <p>
          Some of my projects are WIP
        </p>
      </div>
    </div>
    <Footer />
  </main>
</div>

<style lang="postcss">
  header,main { /* local variable */
    --offset: 80px;
    --split: calc((var(--vh, 100vh) - var(--bottom-h))/2
      + var(--offset));
    @media screen(md) {
      --split: calc((100vh - var(--bottom-h))/2);
    }
  }

  header {
    @apply fixed top-0 w-[100%];
    height: var(--split);
    @media screen(md) {
      top: var(--email-height);
      height: calc(100vh - var(--email-height) - var(--sep-height));
    }
    
    background-image: linear-gradient(90deg,
    #E7E7E7 0%,#E7E7E7 3%, #8381F7 46%,
    #9860FF 59%, #CEB0B0 86%, #EAB9FF 100%);

    @apply flex justify-center items-center;
    .content {
      color: white;
      font-family: 'PPNeueBit';
      @apply inline-block;
      div { @apply inline-block; }

      @apply relative top-[30px];
      .graph {
        @apply absolute top-[-3.3em] right-[2em];
        img { @apply h-[8em] }
        @media screen(md) {
          @apply top-[-5em] right-[3em];
          img { @apply h-[11em] }
        }
      }
      .projectstext { @apply text-5xl relative }
      .shit {
        @apply mt-[1rem] text-7xl relative;
        line-height: 0.8em;
      }
      .mostly {
        @apply text-[0.38em]; line-height: 0.6em;
        @apply relative left-[24%];
      }

      @media screen(md) {
        .projectstext { @apply text-6xl }
        .shit { @apply text-8xl }
        .mostly { @apply left-[30%] }
      }
    }
  }

  main {
    @apply pb-[var(--bottom-h)];
    @media screen(md) {
      @apply pb-0;
    }

    background: theme(colors.void);
    position: relative;
    top: var(--split);
    @media screen(md) {
      top: calc(100vh - var(--sep-height));
    }

    .logoseperator {
      @apply sticky z-10 w-full top-0;
      @media screen(md) {
        top: var(--email-height);
      }
    }
    
    .hackerimg {
      @apply relative;
      span {
        @apply absolute top-[40px];
      }
      p {
        @apply absolute text-3xl;
        font-family: "PPNeueBit";
        color: white;
        bottom: 20px;
        word-spacing: 0.3em;
        right: var(--pin-margin);
        transform-origin: top right;
        transform: rotate(90deg) translateY(-50%);
        mix-blend-mode: exclusion;
      }
      @media screen(md) {
        @apply mt-[4rem];
        @apply max-w-[30rem] ml-auto mr-[2rem];
      }
    }
  }

  /* parallax -------------------------- */
  @media screen(md) {
    .container-3d {
      transform-style: preserve-3d;
    }
    header {
      position: absolute;
      top: 0;
      transform: translateY(calc(var(--email-height) / 2))
        translateZ(-10px) scale(2);
    }
  }
</style>
