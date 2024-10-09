<script>
  import { tagModals } from '$components/pages/projects/Project.svelte'
  import Modal from '$components/Modal.svelte'

  const STARTUP = '#Startup'
  const AI = '#AI'
  const CSHARP = ' C#'
  const REACT = '#React'
  const SSG = '#SSG'
  const IoT = '#IoT'
  const UX = '#UX'
  const DESIGN = '#Design'
  const COMPSCI = '#Comp. Sci.'
</script>

<Modal bind:this={tagModals[STARTUP]} title={STARTUP}>
  <p>
    Since I was 16 I've always had some kind of side-project or even
    a business attempt going on in my life.<br>
    Many failed ventures = many valuable lessons.
    <br><br>
    My previous job was also in a startup, and I recently spent
    more than a year trying (and failing) to launch
    <a href="https://symbolik.ai/" target="_blank">Symbolik.ai</a>.
    <br><br>
    <strong>Right now I'm excited to get back into a job though!</strong>
  </p>
</Modal>

<Modal bind:this={tagModals[AI]} title={AI}>
  <p>
    My initial interest in AI began in 2017 when I had almost just learned to code.
    I learned the basics of Neural Networks, but didn't go any further.
    <br><br>
    Shortly after the release of ChatGPT to the public in late 2022, I became interested
    again. However, discovering LangChain early into 2023 is what truly got me hooked on AI.
    The idea of using LLM's as a <strong>processing unit</strong>
    in an application was very mindblowing to me!
  </p>
</Modal>

<Modal bind:this={tagModals[CSHARP]} title={CSHARP}>
  <p>
    I learned C# in 2016 when I got into gamedev with Unity.
    <br><br>
    In 2019 I had to learn .NET MVC (C#) for school, but disliked it so much that
    I started learning Svelte in my own time. I instantly fell in love, and still use
    and advocate for Svelte and SvelteKit to this day.
    <br><br>
    However, I recently picked up C# again for Symbolik.ai, to build the
    Desktop Client in WPF. This is where C# shines!
  </p>
</Modal>

<Modal bind:this={tagModals[REACT]} title={REACT}>
  <p>
    I learned React when I joined Mostly Code in 2020, and that's
    also what we used to build the app for Clevertrack.
    <br><br>
    I'm really excited about React 19, and seeing how
    it's catching up to the compiler paradigme that
    Svelte pioneered already more than 5 years ago :-) kek
  </p>
</Modal>

<Modal bind:this={tagModals[SSG]} title={SSG}>
  <p>
    I got hired by Mostly Code because of my interest
    in
    <a href="https://jamstack.org/" target="_blank">JAMStack</a>
    , which was all the rage for soydevs
    back in 2020.
    We used <strong>Gatsby.js</strong> for Static Site Generation (SSG).
    Since it's a React framework, we were actually able to use it to
    build a full webapp for Clevertrack.
    <br><br>
    It's been quite the journey as a young person,
    seeing how all of this just continued evolving and challenging
    the status quo.
    I'm very satisfied seeing today's frontend landscape
    offering several frameworks with support for combining
    multiple rendering paradigms!
  </p>
</Modal>

<Modal bind:this={tagModals[IoT]} title={IoT}>
  <p>
    Arduino was actually my very first exposure to programming,
    back in 2015. Had a lot of fun!
    <br><br>
    Clevertrack is also a startup based entirely around IoT,
    allthough I wasn't involved in hardware development.
    <br><br>
    In 2022 I led the software team of a 3-week IoT project at Uni.
    Read about that in the details of my Uni experience.
  </p>
</Modal>

<Modal bind:this={tagModals[UX]} title={UX}>
  <p>
    <!-- In 2018, I briefly attempted to start a freelance design business. -->
    My peers in school often found my obsession with design details <strong>annoying</strong>
    — perfect spacing, contrast, attention flow, and accessibility.
    Getting out of school though, I found my UX skilled was highly valued.
    <br><br>
    At Clevertrack, the CEO said I completely transformed the app's UX,
    and clients had praised the overhaul
    - most of which I wasn't even assigned to do.
    I couldn't help myself.
    <br><br>
    <strong>Design feels like writing clean code:</strong> <br>
    Orchestrating constraints into a meaningful symphony.
    Highly recommend "Hackers & Painters" by Paul Graham :-)
  </p>
</Modal>
