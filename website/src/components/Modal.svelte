<script>
  let modal
  export const open = () => modal.showModal()

  const backdropClick = (e) => {
    const rect = modal.getBoundingClientRect()
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      modal.close()
    }
  }

  import ContentBox from '$components/ContentBox.svelte'
  import notes from '$gfx/skeuo-icons/notes.png'
  import accept from '$gfx/skeuo-icons/gtk-ok.svg'
  // import accept from '$gfx/skeuo-icons/CrystalClearActionApply.svg'
</script>

<svelte:window on:click|capture={backdropClick} />
<dialog bind:this={modal}>
  <div class="header">
    #Startup
    <span class="text-base relative top-[1px] ml-[.5rem]">ⓘ</span>
    <button on:click={() => modal.close()}>
      <span class="relative bottom-[3px]">X</span>
    </button>
  </div>
  <div class="p-5 pt-6">
    <ContentBox full>
      <!-- <div class="float-left">
        <img
          src={notes} alt="Notes Icon"
          width=32 class="transform translate-x-[-8px] translate-y-[10px] scale-[130%]"
        >
      </div> -->
      <slot/>
    </ContentBox>
    <div class="text-right mt-4 mr-8 relative">
      <!-- <img src={notes} alt="Notes Icon" width=48 class="absolute right-32"> -->
      <button class="ok-button" on:click={() => modal.close()}>
        <img src={accept} alt="Accept Icon" width=0>
        <span>
          OK
        </span>
      </button>
    </div>
  </div>
</dialog>

<style lang="postcss">
  dialog::backdrop {
    @apply bg-void/0;
    @apply bg-gradient-to-b from-void/100 via-void/0 to-void/100;
    
    height: 150vh;
    @media screen(md) {
      top: calc(var(--email-height) + 2px);
      height: calc(100% - var(--email-height) + 2px);
    }
  }

  dialog {
    @apply bg-void/75;
    backdrop-filter: blur(15px);
    border: 5px solid greenyellow;
    padding: 5px;

    max-width: 30rem;
  }

  .header {
    font-family: "PPNeueBit";
    /* font-family: "PPFraktionMono"; */
    @apply bg-[black] text-[white] text-xl;
    @apply pb-[.1rem] pl-[.15rem] leading-none;

    @apply relative;
    button {
      user-select: none;
      height: calc(100% - 2 * 3px);
      @apply absolute right-[3px] top-1/2 transform -translate-y-1/2;
      @apply px-[.2rem];
      @apply bg-void font-bold text-[black];
      border-bottom: 2px solid theme(colors.grey);
      border-right: 2px solid theme(colors.grey);
      border-top: 2px solid white;
      border-left: 2px solid white;

      &:hover {
        /* @apply bg-gradient-to-t from-[white]/100 to-[white]/0; */
        @apply bg-[white];
      }
    }
  }

  .ok-button {
    @apply px-10 py-1 font-bold;
    @apply bg-void text-greyDarker;
    border-bottom: 3px solid theme(colors.grey);
    border-right: 3px solid theme(colors.grey);
    border-top: 2px solid white;
    border-left: 2px solid white;

    @apply relative;
    img {
      @apply inline absolute w-[1.5rem] left-5;
    }
    span {
      @apply relative left-2.5;
    }

    &:hover {
      /* @apply bg-gradient-to-t from-[white]/50 to-void; */
      @apply bg-gradient-to-t from-[white]/60 to-[white]/10;
    }
  }
</style>