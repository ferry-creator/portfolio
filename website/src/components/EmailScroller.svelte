<script>
  import Mail from '$gfx/Mail.svelte'
</script>

<a href="mailto:jonathan@segefjord.space">
  <div class="_container">
    <div class="scroller">
      {#each Array(5) as NULL}
        <span class="mail">
          <Mail />
        </span>
      {/each}
    </div>
  </div>
</a>

<style>
  ._container {
    height: var(--email-height);

    background-image: linear-gradient(-90deg,
    #E7E7E7 0%, #E7E7E7 6%, #8381F7 46%,
    #9860FF 68%, #EAB9FF 100%);
  }

  .scroller {
    height: 100%;
    @apply flex flex-row items-center;
    @apply overflow-x-hidden;
    .mail {
      @apply pl-[0.5rem] pr-[2rem];
      animation: scroll 10s infinite linear;
    }
  }
  @keyframes scroll {
    from { transform: translateX(0%); }
    to { transform: translateX(-100%); }
  }
</style>
