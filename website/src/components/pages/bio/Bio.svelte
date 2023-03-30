<script>
  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'
  import Sphere from '$assets/sphere.svg'
  import Sparkles from '$assets/sparkles.png'
</script>

<div class="pins">
  <span class="left-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
  <span class="right-[var(--pin-margin)] md:hidden">
    <Pin --color="currentColor" />
  </span>
</div>
<Container>
  <ContentBox>
    <h2 class="text-7xl">
      Bio
    </h2>
    <p class="leading-tight">
      As a kid, I quickly discovered the creative potential of computers and started creating my own games at age 12.
    </p>
    <p class="leading-tight mt-5">
      In a way, I actually became a developer by accident. Initially, I thought I'd only pursue art and leave coding to the "nerds", but while in high school, I ended up loving code, and got obsessed with learning the Unity game engine. After high school, I attempted to start a freelance design business but struggled to make it profitable, realizing the importance of business skills in the process.
    </p>
    <p class="leading-tight mt-5">
      <span>Today</span>, I'm a skilled designer + programmer with experience working in <span>startups</span>, and pursuing a B.Sc. in Design & Innovation at the Technical University of Denmark.
    </p>
  </ContentBox>
  <div class="create4ever mt-[4rem]">
    <img src={Sphere} alt="sphere.svg">
    <h4 class="mt-[1rem]">
      <span>Create forever</span>
      <img src={Sparkles} alt="sparkles.png">
    </h4>
  </div>
</Container>

<style lang="postcss">
  .pins {
    @apply relative top-[2rem];
    span { @apply text-grey absolute }
  }
  
  .create4ever {
    @apply text-center;
    >img { @apply mx-auto }
    h4 {
      @apply relative inline-block;
      font-family: "PPMondwest";
      color: theme(colors.purple);
      @apply text-5xl;
    }
    h4 img {
      top: -120%;
      height: 100%;
      @apply absolute right-[-1rem];
      image-rendering: pixelated;
    }
  }
</style>
