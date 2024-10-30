<script>
  import Accordion from '$components/Accordion.svelte'

  import itemIcon from '$gfx/skeuo-icons/Next-alt2.png'

  export let downloads = {
    'Official Link': 'https://campusnet.dtu.dk/cnnet/Grades/Public.aspx?Id=RM84WE8FGM',
    'Download': '/projects/DTU/grades.pdf',
  }

  let open = false
</script>

<Accordion on:open={() => open = true} on:close={() => open = false}>
  <div
    slot="summary" class="summary"
  >
    <img src={itemIcon} alt="Open Icon" class:open>
    <div class="ml-4">
      <span class="year mr-4">
        View Grades
      </span>
      <slot name="thumbnail" />
      {#each Object.entries(downloads) as [link, url]}
        <a
          class="ml-4 block"
          href={url} target="_blank"
          on:click|stopPropagation
        >
          {link}
        </a>
      {/each}
    </div>
  </div>
  <div slot="content" class="pt-[.4rem] details">
    <!-- {#if showStickySummary}
      <slot name="details" />
    {/if} -->
    <slot name="details" />
  </div>
</Accordion>

<style lang="postcss">
  .summary > img.open {
    transform: scale(1) rotate(95deg);
    transition: transform 50ms ease;
  }

  .summary:active > img {
    transform: scale(0.8) rotate(0deg);
  }
  
  .summary:active > img.open {
    transform: scale(0.8) rotate(95deg);
  }

  .summary {
    @apply relative z-0;
    @apply flex;
    & > * {
      flex-shrink: 0;
    }

    @media screen(md) {
      @apply block;
    }
    & > img {
      @apply inline w-[26px] relative bottom-[2px] z-[1] shrink-0;
    }

    & > div {
      @apply inline-flex items-center;
      .year {
        font-family: "PPFraktionMono";
        @apply text-lg font-bold text-greyDark tracking-tighter;
        @apply relative bottom-[-1px] z-[1];
      }
      & > :global(img) {
        @apply w-[16px] mr-1;
      }
      .title {
        @apply text-grey;
        text-wrap: nowrap;
      }
      a {
        @apply text-sm font-medium text-greyDarker;
        background: greenyellow;
        border-bottom: dotted 2px black;
        @apply px-2;
        &:hover, &:active {
          background: theme(colors.purple);
          color: white;
        }

        @apply relative z-[1];
        &:after {
          content: '';
          display: block;
          @apply absolute w-full h-4 -bottom-1.5 -left-1.5;
          background-image: url('$gfx/skeuo-icons/link-128x128.png');
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      ul.flairs {
        @apply flex;
        li:not(:last-child) {
          @apply mr-1;
        }

        li {
          text-wrap: nowrap;
          @apply px-[0.35rem] py-[0.07rem] rounded-full;
          @apply text-[white] text-xs font-medium tracking-tighter;
          @media screen(md) {
            @apply px-[0.55rem];
            @apply text-sm tracking-normal;
            span {
              @apply relative bottom-[0.05rem];
            }
          }

          @apply bg-purple;
          &.orange { background: #f75600 }
          &.pink   { background: #ff00ff }
          &.black  { background: #232323 }
          &.blue   { background: #00aeff }
          &.yellow { background: #eac300 }
          &.green { background: #00ba54 }

          @apply relative;
          &::before {
            content: '';
            @apply block absolute inset-0;
            @apply rounded-full;
            @apply bg-gradient-to-b from-[white]/100 via-[white]/30 to-[white]/0;
            opacity: 50%;
          }
          &::after {
            content: '';
            @apply block absolute inset-0;
            @apply rounded-full;
            @apply h-[55%] top-[0.1rem] left-[0.2rem] right-[0.22rem];
            @apply bg-gradient-to-b from-[white]/80 to-[white]/30;
            opacity: 25%;
          }

          @apply opacity-0 sm:opacity-100;
          &.showMobile {
            @apply opacity-100;
          }
        }
      }
    }
  }

  .content {
    @apply relative;
    :global(p) {
      @apply leading-tight;
      padding-right: 5rem;
      max-width: 35rem;
      @media screen(md) {
        @apply max-w-none pr-0;
      }
    }
    .text-body {
      position: relative;
      top: -4px;

      padding-left: 2.5rem;
      padding-bottom: 0.5rem;
    }
  }

  .details :global(table) {
    @apply table-auto;

    :global(tbody > tr):not(:first-child) {
      border-top: 1px solid rgba(0,0,0,0.2);
    }

    :global(td):not(:last-child) {
      @apply pr-8;
    }

    :global(td):last-child {
      @apply pl-4 pr-1;
      @apply text-purple font-bold text-right;
      border-left: 1px solid rgba(0,0,0,0.2);
    }

    :global(th):last-child {
      @apply pl-4 pr-1;
      @apply text-right;
      /* border-left: 1px solid rgba(0,0,0,0.2); */
    }
  }
</style>