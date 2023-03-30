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
  <span class="right-[var(--pin-margin)] md:hidden">
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
  <ContentBox>
    <p class="leading-tight mt-5">
      At age 16, I worked in an SMMA doing "monkey work" like sorting SEO keywords. At 17, I worked for two years in a local animal park before quitting in 2017 to focus on my last year of high school.
    </p>
    <p class="leading-tight mt-5">
      In <span>2019</span>, I worked part-time as a cold canvas phoner while studying web development. Same year, I got my first developer-related job at <a href="https://www.danguitar.dk/" target="_blank">Danguitar</a>. The company was still a startup, so I wore many hats, such as preparing parcels, creating content for advertisement, and managing the product catalog in their CMS. I started automating repetetive tasks with Python, which led to my first professional development job: creating a performance monitor for the customer service department.
    </p>
    <p class="leading-tight mt-5">
      In <span>2020</span>, I started working for Mads Sastakauskas Østergaard, as his only employee and grew exponentially as a developer with him as my mentor.
      We were both very interested in serverless and SSG with React back then.
    </p>
    <p class="leading-tight mt-5">
      In the summer of <span>2022</span>, his company merged with our biggest client, <a href="https://www.clevertrack.dk/" target="_blank">Clevertrack</a> (a startup), who immediately employed me, and that's where I'm still working today, building their web app and creating internal tools for automation.
    </p>
  </ContentBox>
</Container>

<style lang="postcss">
  .pins {
    @apply relative top-[1.7rem];
    span { @apply text-grey absolute }
  }

  .tag-cloud {
    @apply mx-auto max-w-[20rem];
    @media screen(md) {
      @apply max-w-[35rem] relative left-[50px];
    }
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
