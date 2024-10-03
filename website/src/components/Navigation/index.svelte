<script>
  import NavLink from './NavLink.svelte'
</script>

<nav>
  <ul>
    <li>
      <NavLink to="/">
        bio
      </NavLink>
    </li>
    <li>
      <NavLink to="/projects">
        projects
      </NavLink>
    </li>
    <li class="ml-auto">
      <NavLink to="/art">
        art
      </NavLink>
    </li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    height: var(--nav-height);
    background: white;
    font-family: "PPFraktionMono";
    font-size: 1.55rem;

    @media screen(md) {
      font-size: 1.3rem;
      height: var(--email-height);
      max-width: 24rem;
      @apply mx-auto;
    }
  }

  ul {
    @apply flex;
    height: 100%;
  }
  
  nav>ul>li :global(a) {
    @apply px-[calc(var(--page-margin)/2)];  
  }
  nav>ul>li:first-child :global(a) {
    @apply pl-[var(--page-margin)];
  }
  nav>ul>li:last-child :global(a) {
    @apply pr-[var(--page-margin)];
  }
</style>
