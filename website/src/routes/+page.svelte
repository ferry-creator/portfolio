<script>
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import Image from '$components/Image.svelte'

  import DesktopSplitter from '$components/DesktopSplitter.svelte'
  import Smiley from '$gfx/Smiley.svelte'
  import Pin from '$components/Pin.svelte'
  import LogoSeperator from '$components/LogoSeperator.svelte'
  import Profile from '$components/pages/bio/Profile.svelte'
  import Bio from '$components/pages/bio/Bio.svelte'
  import Seperator from '$components/Seperator.svelte'
  import Xp from '$components/pages/bio/Xp.svelte'
  import Reflections from '$components/pages/bio/Reflections.svelte'
</script>

<div class="page-context-vars">
  <Header parallaxOffset="3rem">
    <div class="header-content">
      <div class="text-5xl md:text-6xl">
        <span>Hello world.</span>
        <span class="smiley"><Smiley/></span>
      </div><br>
      <div class="mt-[1rem] text-4xl md:text-5xl">
        <span>THIS IS MY PAGE ON THE</span><br>
        <div class="text-[2em] leading-[0.6em]">INTERWEBS</div>
      </div>
    </div>
  </Header>
  <main>
    <div class="logoseperator pointer-events-none">
      <LogoSeperator />
    </div>
    <DesktopSplitter --top="7rem">
      <div class="profile order-last">
        <Profile />
      </div>
      <div class="md:my-0 my-[8rem] order-first">
        <Bio />
      </div>
    </DesktopSplitter>
    <div class="seperator">
      <Seperator />
    </div>
    <DesktopSplitter --top="2rem">
      <div class="md:block order-last">
        <div class="hackerimg">
          <span class="left-[var(--pin-margin)]">
            <Pin --color="white" />
          </span>
          <span class="right-[var(--pin-margin)]">
            <Pin --color="white" />
          </span>
          <div class="min-w-[20rem]">
            <Image
              src="/images/powerpose.png"
              alt="Jonathan posing in his dorm room"
              loadstack={['base64', 'compressed', 'HQ']}
            />
          </div>
          
          <!-- <img src="/images/powerpose.png"
            alt="Jonathan posing in his dorm room"
            class="min-w-[20rem]"
          > -->
          <p>
            <!-- chilling in my dorm room -->
            <!-- turned your head? lmao -->
            <!-- 100% unstaged pic -->
            <!-- chaotic in my dorm room -->
            <!-- artsy pic in my dorm room -->
            posing in my dorm room
          </p>
        </div>
      </div>
      <div class="xp order-first">
        <Reflections />
      </div>
    </DesktopSplitter>
    <Footer />
  </main>
</div>

<style lang="postcss">
  .page-context-vars {
    --offset: 15px;
    --split: calc((var(--vh, 100vh) - var(--bottom-h))/2
      + var(--offset));
    @media screen(md) {
      --split: calc((100vh - var(--bottom-h))/2);
    }
  }

  .header-content {
    color: white;
    font-family: 'PPNeueBit';
    @apply inline-block;
    div { @apply inline-block; }

    .smiley :global(img) {
      @apply h-[0.57em] mb-[0.22em] ml-[0.32em]
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

    .profile {
      /* height: calc(100vh - var(--split)); */
      @apply relative z-0;
      width: 100%;
      height: calc(var(--split) - var(--offset)*2
        - var(--sep-height)
        - var(--page-margin) - 1px
      );
      @media screen(md) {
        height: auto;
        margin-top: 5rem;
      }
    }

    .seperator {
      @apply pt-[4rem] mb-[3rem];
      @apply md:pt-[10rem];
    }
    
    .hackerimg {
      @apply relative;
      span {
        @apply absolute top-[40px] z-[1];
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
        @apply mx-[var(--page-margin)];
        @apply mt-[4rem];
        /* max-width: 315px; */
      }
    }
    
    .xp { @apply mt-[4rem] md:mt-[13px] }
  }
</style>
