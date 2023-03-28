<script>
  import { page } from "$app/stores"
  export let to
  $: active = $page.url.pathname === to
</script>

<a href={to}>
  <span class:active>
    <slot/>
  </span>
</a>

<style>
  a {
    /* background: grey; */
    height: 100%;
    @apply flex items-center;

    @apply relative top-[-4px]; 
    span {
      color: theme(colors.greyDark);
      line-height: 2rem;
      @apply px-[10px];

      @apply relative z-[0];
      &.active {
        color: black;
        /* color: white; */
        &:after {
          background: #98fb98;
          background: greenyellow;
          /* background: #8381F7; */
          top: 2px;
          /* border-radius: 4px; */
          @apply absolute z-[-1];
          @apply w-full h-full left-0;
          content:"";
        }
      }
    }
  }
</style>
