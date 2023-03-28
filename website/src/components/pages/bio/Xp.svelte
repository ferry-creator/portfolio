<script>
  import Container from '$components/Container.svelte'
  import ContentBox from '$components/ContentBox.svelte'
  import Pin from '$components/Pin.svelte'

  const tags = {
    "Comp. Sci": "/",
    "IoT": "/",
    "UX": "/",
    "Lean Startup": "/",
    "React": "/",
    "Python": "/",
    "Svelte": "/",
  }
</script>

<div class="pins">
  <span class="left-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
  <span class="right-[var(--pin-margin)]">
    <Pin --color="currentColor" />
  </span>
</div>
<Container>
  <ContentBox>
    <h2 class="text-6xl">Experience</h2>
  </ContentBox>
  <ul class="tag-cloud">
    {#each Object.entries(tags) as [tag, link]}
    <li>
      <a href={link}>{tag}</a>
    </li>
    {/each}
  </ul>
</Container>

<style lang="postcss">
  .pins {
    @apply relative top-[1.7rem];
    span { @apply text-grey absolute }
  }

  .tag-cloud {
    li {
      @apply inline-block;
      @apply m-[0.4rem] mb-[0.8rem];
    }
    a {
      background: theme(colors.purple);
      color: white;
      font-family: "PPFraktionMono";
      @apply text-2xl;
      @apply px-[0.7rem] pb-[0.4rem];
    }
  }
</style>
