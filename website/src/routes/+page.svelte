<script>
  import Footer from '$components/Footer.svelte'
  import DesktopSplitter from '$components/DesktopSplitter.svelte'
  import Smiley from '$gfx/Smiley.svelte'
  import Pin from '$components/Pin.svelte'
  import LogoSeperator from '$components/LogoSeperator.svelte'
  import Profile from '$components/pages/bio/Profile.svelte'
  import Bio from '$components/pages/bio/Bio.svelte'
  import Seperator from '$components/Seperator.svelte'
  import Hacker from '$assets/hackerpose.png'
  import Xp from '$components/pages/bio/Xp.svelte'
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
      <div class="helloworld">
        <span>Hello world.</span>
        <span class="smiley"><Smiley/></span>
      </div><br>
      <div class="mypage">
        <span>THIS IS MY PAGE ON THE</span><br>
        <div class="interwebs">INTERWEBS</div>
      </div>
    </div>
  </header>
  <main>
    <div class="logoseperator">
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
      <div class="contents md:block order-last">
        <div class="hackerimg">
          <span class="left-[var(--pin-margin)]">
            <Pin --color="white" />
          </span>
          <span class="right-[var(--pin-margin)]">
            <Pin --color="white" />
          </span>
          <img src={Hacker}
            alt="Jonathan posing as a hacker">
          <p>
            artsy pic in my dorm room
          </p>
        </div>
      </div>
      <div class="xp order-first">
        <Xp />
      </div>
    </DesktopSplitter>
    <Footer />
  </main>
</div>

<style lang="postcss">
  header,main { /* local variable */
    --split: calc((100vh - var(--bottom-h))/2);
    
    --offset: 15px;
    --split: calc((var(--vh) - var(--bottom-h))/2
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
      .helloworld { @apply text-5xl }
      .smiley :global(img) {
        @apply h-[0.57em] mb-[0.22em] ml-[0.32em]
      }
      .mypage { @apply mt-[1rem] text-4xl  }
      .interwebs { @apply text-[2em]; line-height: 0.6em; }

      @media screen(md) {
        .helloworld { @apply text-6xl }
        .mypage { @apply text-5xl  }
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
        @apply mx-[var(--page-margin)];
        @apply mt-[4rem];
        /* max-width: 315px; */
      }
    }
    
    .xp { @apply mt-[4rem] md:mt-[13px] }
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
