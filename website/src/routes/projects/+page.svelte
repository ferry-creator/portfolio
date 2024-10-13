<script>
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import Graph from '$gfx/Graph.svg'
  import Pin from '$components/Pin.svelte'
  import LogoSeperator from '$components/LogoSeperator.svelte'
  import Hacker from '$assets/hackerpose.png'
  import Project from '$components/pages/projects/Project.svelte'
  import TagModals from '$components/pages/projects/TagModals.svelte'

  import IndexItem from '$components/pages/projects/IndexItem.svelte'

  import PSplitTextW from "$components/pages/projects/PSplitTextW.svelte"
  import ParagraphSplit from '$components/pages/projects/ParagraphSplit.svelte'
</script>

<div class="page-context-vars">
  <Header parallaxOffset="-1rem">
    <div class="header-content relative top-[30px]">
      <div class="absolute top-[-3.3em] right-[2em] md:top-[-5em] md:right-[3em]">
        <img src={Graph} alt="graph.svg" class="h-[8em] md:h-[11em]">
      </div>
      <div class="relative text-5xl md:text-6xl">
        <span>projects.</span>
      </div><br>
      <div class="relative mt-[1rem] leading-[0.8em] text-7xl md:text-8xl">
        <span>
          Shit I Created
          <br>{`:-)`}
        </span>
        <div class="relative text-[0.38em] leading-[0.6em] left-[24%] md:left-[30%]">
          . . . and mostly finished
        </div>
      </div>
    </div>
  </Header>
  <main class="overflow-x-clip">
    <div class="logoseperator pointer-events-none">
      <LogoSeperator />
    </div>
    <div class="max-w-[60rem] mx-auto">
      <div class="relative">
        <div class="hackerimg mb-[5rem]">
          <span class="left-[var(--pin-margin)]">
            <Pin --color="white" />
          </span>
          <span class="right-[var(--pin-margin)]">
            <Pin --color="white" />
          </span>
          <img src={Hacker} alt="Jonathan pretending to use his computer">
          <p class="sidetext">
            playing counter-strike rn
          </p>
        </div>
      </div>
      <div class="mt-[3rem]">
        <Project
          title="Symbolik.ai"
          year=2023
          img="/projects/symbolik-ai/thumbnail.png"
          link="https://symbolik.ai/"
          techstack={["#Startup", "#AI", " C#"]}
        >
          Before I became a web developer, I worked an <strong>incredibly boring</strong> office job.
          I tried automating my tasks using Python, AutoIT scripting and other hacks,
          but discovered many limitations.
          <br><br>
          Seeing the LLM space emerge rapidly in 2023, I knew everything was about to change!
          <br><br>
          So — I tried to create a startup.
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  What I'm building: 
                  An AI co-worker, that office employees interact with and train in their tasks,
                  simply by talking to the AI co-worker. The AI system builds a mental model (in a knowledge-like graph structure)
                  which enables cheap automations once the system has correctly understood a task.
                  <br><br>
                  While I was studying webdev in 2018 and 19', I was working a part time job in
                  a webshop warehouse. I was eventually promoted into their office space,
                  but I was so bored that I began trying to automate my tasks.
                  <br><br>
                  Today, millions of humans are employed in office cubicles,
                  doing very easy and boring manual labor on computers.
                  It's expensive for businesses, and oftens comes with high employee turnover rates.
                  <br><br>
                  I worked directly together with two big Danish coorporations and their office workers
                  to understand how it might be possible to finally solve this problem by utilizing AI.
                  <br><br>
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </Project>
        <Project
          title="Clevertrack"
          year=2022
          img="/projects/clevertrack-dark.png"
          link="https://www.clevertrack.dk/"
          techstack={["#React", "#SSG", "#IoT", "#UX"]}
        >
          <!-- In 2022 I joined <a href="https://www.clevertrack.dk/" target="_blank">Clevertrack</a> as a part-time fullstack designer + developer. I build internal tools to help them scale up, and maintain the website. I also develop new features on the web app. -->
          <!-- <br><br> -->
          <!-- <a href="#Mostly Code">I was already working with Clevertrack in 2020.</a> -->
          <!-- <br><br> -->
          <!-- In 2023 I created the website blog (coming soon), and also aggregated some legacy .NET code to be used for internal tooling. I made a big push in the organisation to utilize the existing code, as my main focus is to make great business decisions, rather than coding for beauty. -->
          My career began at <strong>Mostly Code</strong> in <strong>early 2020</strong>, working full-time with my mentor
          <a href="https://www.linkedin.com/in/madsmadsdk/" target="_blank">Mads Østergaard</a>
          on different web projects and a SaaS startup — an experience that shaped my
          foundation as a developer.
          <br><br>
          After Mostly Code closed in <strong>2022</strong>, our biggest client
          <a href="https://www.clevertrack.dk/" target="_blank">Clevertrack</a>
          hired me in a part-time role while I pursued my university studies.

          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  While I was studying webdev in 2018 and 19', I was working a part time job in
                  a webshop warehouse. Eventually I made my way into the office, but I was so bored
                  with the mundane and repetiive office work, that I began automating tasks with
                  Python, AutoIT scripting and other hacks.
                </p>
                <div slot="split">
                  <img src="/projects/clevertrack/app.png" alt="wow" />
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </Project>

        <Project
          title="DTU (Uni)"
          year=2020
          img="/projects/DTU/thumbnail.png"
          link="https://investindk.com/insights/technical-university-of-denmark-dtu-ranks-third-after-stanford-and-mit"
          techstack={["#Design", "#Comp. Sci."]}
        >
          After 5 months of full-time work at
          <a href="https://staging--mostlycode.netlify.app/" target="_blank">Mostly Code</a>
          , I enrolled in University to study a BSc in <strong>Design & Innovation</strong>.
          <br><br>
          At DTU, 25% of your courses are free electives, so I picked
          a lot of <strong>computer science</strong> classes to improve my SWE skills.
          <br><br>
          <!-- My grades and selected course projects are attached below :-) -->
          Open the details to view my grades & course projects :-)
          <div slot="img-extras" class="pointer-events-none">
            <img
              class="marker-bsc-design-innovation"
              src="/marker/bsc-design-innovation/squiggle.png"
              alt="Handwritten squiggle"
            >
            <img
              class="marker-bsc-design-innovation"
              src="/marker/bsc-design-innovation/text-v2.png"
              alt="Handwritten text: 'BSc in Design & Innovation'"
            >
          </div>
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </Project>



        <IndexItem
          title="anybots.gg"
          year=2024
          link="https://anybots.vercel.app/"
          flairs={[
            { text: "UI Concept", color: "pink" },
            { text: "Discord", color: "blue" },
            { text: "Svelte", color: "orange" },
          ]}
        >
          <img
            slot="thumbnail" alt="project icon" class="transform scale-[1.15]"
            src="/projects/index/anybots/thumbnail.svg"
          >
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </IndexItem>

        <IndexItem
          title="Sphere"
          year=2023
          link="https://sphere.segefjord.space/ai"
          flairs={[
            { text: "Social Media", color: "blue" },
            { text: "Svelte", color: "orange" },
          ]}
        >
          <img
            slot="thumbnail" alt="project icon"
            src="/projects/index/sphere/favicon.png"
          >
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </IndexItem>

        <IndexItem
          title="Mind Mapper"
          year=2023
          link="https://dev.app.symbolik.ai/maps"
          flairs={[
            { text: "UX Experiment", color: "black" },
            { text: "Svelte", color: "orange" },
          ]}
        >
          <img
            slot="thumbnail" alt="project icon"
            src="/projects/index/mindmapper/logo-mark-aero.svg"
          >
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </IndexItem>

        <IndexItem
          title="Zprite"
          year=2023
          link="https://zprite.vercel.app/"
          flairs={[
            { text: "3D Web", color: "black" },
            { text: "Three.js", color: "yellow" },
            { text: "Art", color: "pink" },
          ]}
        >
          <img
            slot="thumbnail" alt="project icon"
            src="/projects/index/zprite/thumbnail.png"
          >
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </IndexItem>

        <IndexItem
          title="Markless Tailwind"
          year=2023
          link="https://markless-tailwind.vercel.app/"
          flairs={[
            { text: "Svelte", color: "orange" },
            { text: "Utility", color: "blue" },
            { text: "Graphs", color: "black" },
          ]}
        >
          <img
            slot="thumbnail" alt="project icon"
            src="/projects/index/markless/tw-logo.svg"
          >
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </IndexItem>

        <IndexItem
          title="shelly.run"
          year=2022
          link="https://github.com/nemzyx/shelly.run"
          flairs={[
            { text: "Game", color: "pink" },
            { text: "EdTech", color: "black" },
            { text: "Reactive Programming", color: "green" },
          ]}
        >
          <img
            slot="thumbnail" alt="project icon"
            src="/projects/index/shelly-run/favicon.png"
            class="pixelated"
          >
          <div slot="details" class="project-details">
            <PSplitTextW>
              <ParagraphSplit>
                <p slot="paragraph">
                  In 2022 I led the software team of a 3-week IoT project.
                  We built a "sourdough hotel" that automatically nutured and
                  measured a sourdough mixture, sending information to users phone.
                  I was involved in all the software layers: embedded programming, devops,
                  and server-side <strong>Node-RED</strong>.
                  <br><br>
                  I also spun up a quick
                  <a href="https://kryptokongerne.vercel.app/" target="_blank">blog site</a>
                  , to document our progress.
                </p>
                <div slot="split">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video controls>
                    <source src="/projects/symbolik-ai/ai-mode-compressed.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ParagraphSplit>
            </PSplitTextW>
          </div>
        </IndexItem>
        
        <!-- <Project
          title="shelly.run"
          year=2022
          img="/projects/shelly-run.png"
          link="https://github.com/nemzyx/shelly.run"
          techstack={["React", "IoT", "SSG", "UX"]}
        >
          Initially created to teach my older sister how to code, <a href="https://github.com/nemzyx/shelly.run" target="_blank">shelly.run</a> evolved into a project with the potential to help many others.
          I designed Shelly the turtle as a relatable character to help beginners understand how state and variables eventually turn into useful systems.
          <br><br>
          A big innovation in the project is the reactive browser console, which enables players to program Shelly using JavaScript in the browser's built-in REPL environment.
          That makes it an accesible zero-config programming environment for beginners, while advanced users still get the full power of JavaScript. Shelly is a completely hackable turtle, while also being beginner-friendly.
          <br><br>
          Shelly is programmable in JavaScript via the browsers built in REPL console, thanks to my <a href="https://gist.github.com/nemzyx/625ef854a899653d5acf652b813f784f" target="_blank">reactive console</a> innovation.
          <br><br>
          Although still in early alpha, shelly.run is already <a href="https://shelly.run/" target="_blank">live</a> and you can find instructions for playing on the <a href="https://github.com/nemzyx/shelly.run" target="_blank">Github page</a>.
        </Project>
        <Project
          title="FPGA pong game"
          year=2022
          img="/projects/FPGA-pong.png"
          link="https://www.youtube.com/watch?v=oZGwaHUg-Vk&t=170s"
          techstack={["React", "IoT", "SSG", "UX"]}
        >
          This project was the result of a DTU course in FPGA programming. Initially the goal of the project was to create the controller for a vending machine.
          <br><br>
          The day before the hand in, I decided to implement an interpretation of pong on the board, which made the project awesome.
          Watch it in action on
          <a href="https://www.youtube.com/watch?v=oZGwaHUg-Vk&t=170s" target="_blank">YouTube</a>
          <br><br>
          Source is available on
          <a href="https://github.com/nemzyx/FPGA-pong" target="_blank">Github</a>.
        </Project>
        <Project
          title="Sourdough Hotel"
          year=2022
          img="/projects/sourdough.png"
          link="https://www.youtube.com/watch?v=Z9Q-h7dPK7k"
          techstack={["React", "IoT", "SSG", "UX"]}
        >
          We had 3 weeks at DTU to build a fully automated IoT enabled sourdough machine. I lead the software team from hardware programming, to code and deployment of all the IoT layers using Azure and Node-red. I also maintained and created the <a href="https://kryptokongerne.vercel.app/" target="_blank">blog</a>.
          <br><br>
          I produced this <a href="https://www.youtube.com/watch?v=Z9Q-h7dPK7k" target="_blank">YouTube video</a> at the end of the project . Code is available on <a href="https://github.com/nemzyx/kryptokongerne" target="_blank">Github</a>.
        </Project>
        <Project
          title="Mostly Code"
          year=2020
          img="/projects/mostlycode.png"
          link="https://www.youtube.com/watch?v=n5alpcJM6nE"
          techstack={["React", "IoT", "SSG", "UX"]}
        >
          <a href="https://www.youtube.com/watch?v=n5alpcJM6nE" target="_blank">Mostly Code</a>
          was my first real developer job. I worked along my mentor Mads Østergaard, who hired me as his only employee. My work in Clevertrack actually began all the way back in 2020, as they were our biggest client. Mostly Code merged with Clevertrack in 2022.
          <br><br>
          However, we also had many other projects in Mostly Code, inlcuding <a href="https://danmarksopsamling.dk/" target="_blank">Like The Oceans We Rise</a>, and a political party quiz for a 2022 Danish election with the FHO organisation, <a href="https://kandidattest.fho.dk/" target="_blank">FHO Kandidattest</a>.
          <br><br>
          Unfortunately, our website <a href="https://web.archive.org/web/20220130101040/https://mostlycode.dk/" target="_blank">mostlycode.dk</a> have been lost to time.
        </Project> -->
      </div>
    </div>
    <TagModals />
    <Footer />
  </main>
</div>

<style lang="postcss">
  .page-context-vars {
    --offset: 80px;
    --split: calc((var(--vh, 100vh) - var(--bottom-h))/2
      + var(--offset));
    @media screen(md) {
      --split: calc((100vh - var(--bottom-h))/2);
    }
  }

  .header-content {
    color: white;
    font-family: 'PPNeueBit';
    
    @apply inline-block;
    div { @apply inline-block; }
  }

  main {
    @apply pb-[var(--bottom-h)];
    @media screen(md) {
      @apply pb-0;
    }

    background: theme(colors.void);
    position: relative;
    top: var(--split);
    @media screen(md) {
      top: calc(100vh - var(--sep-height));
    }

    .logoseperator {
      @apply sticky z-10 w-full top-0;
      @media screen(md) {
        top: var(--email-height);
      }
    }
    
    .hackerimg {
      @apply relative;
      span {
        @apply absolute top-[40px];
      }
      .sidetext {
        @apply absolute text-3xl;
        font-family: "PPNeueBit";
        color: white;
        bottom: 20px;
        word-spacing: 0.3em;
        right: var(--pin-margin);
        transform-origin: top right;
        transform: rotate(90deg) translateY(-50%);
        mix-blend-mode: exclusion;
      }

      @media screen(md) {
        @apply max-w-[30rem] ml-auto mr-[2rem];
        @apply hidden;
      }
    }
  }

  .project-details {
    border: 5px solid greenyellow;
    padding-top: .3rem;
    @apply px-[.5rem];

    & p:first-child {
      width: calc(100% - 5px - .5rem);
    }

    @media screen(md) {
      & div:nth-child(1) {
        padding-left: calc(4rem - 5px - .5rem);
        padding-top: .2rem;
      }
    }    
  }

  .marker-bsc-design-innovation {
    @apply absolute transform -translate-y-1/2 ;
    @apply w-[100%] top-[calc(50%-10%)] -right-7 rotate-[25deg];
    @media screen(md) {
      @apply w-[55%] top-[calc(50%-27%)] -right-6 rotate-0;
    }
  }
</style>
