<script>
  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'
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
    <h2 class="text-6xl">Reflections</h2>
  </ContentBox>
  <ContentBox>
    <p class="mt-5 hidden md:block">
      <s>Don't hate the player, hate the game</s> <br>
      Hating is for losers. Learn to play the game.
    </p>
    <p class="mt-5 md:hidden">
      <s>Don't hate the player, <br> hate the game</s> <br>
      Hating is for losers. <br> Learn to play the game.
    </p>
    <p class="mt-12">
      <s>Laugh at perfection!</s> <br>
      Perfection is <i><strong>undesirable</strong></i> most of the time. <br>
      However, the difference between ordinary and the <i>exceptional</i>,
      is having the <i><strong>capacity</strong></i> to be perfect - when it truly matters.
      <br><br>
      Users truly matter, and they <i><strong>will</strong></i>
      feel when someone cared enough to be perfect for them.
      Apple's success is testimony to this.
    </p>

    <p class="leading-tight mt-12">
      <strong class="tracking-tighter">Crafting a perfect design is like writing clean code:</strong> <br>
      First you discover the constraints of the system.<br>
      Then, using your toolbox you let the constraints guide a melody.
      <br><br>
      You're essentially orchestrating <i>constraints</i> into a meaningful <i>symphony</i>.
      <br><br>
      Highly recommend <strong>"Hackers & Painters"</strong> by Paul Graham :-)
    </p>
  </ContentBox>
  <ContentBox maxWidth="none">
    
  </ContentBox>
</Container>

<style lang="postcss">
  .pins {
    @apply relative top-[1.7rem];
    span { @apply text-grey absolute }
  }
</style>
