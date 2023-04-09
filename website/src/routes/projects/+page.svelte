<script>
  import Footer from '$components/Footer.svelte'
  import Graph from '$gfx/Graph.svg'
  import Pin from '$components/Pin.svelte'
  import LogoSeperator from '$components/LogoSeperator.svelte'
  import Hacker from '$assets/hackerpose.png'
  import Project from '$components/pages/projects/Project.svelte'
</script>

<div class="container-3d">
  <header>
    <span class="absolute top-[calc(var(--sep-height)/2)]
      left-[var(--pin-margin)]">
      <Pin --color="white" />
    </span>
    <span class="absolute top-[calc(var(--sep-height)/2)]
      right-[var(--pin-margin)]">
      <Pin --color="white" />
    </span>
    <div class="content">
      <div class="graph">
        <img src={Graph} alt="graph.svg">
      </div>
      <div class="projectstext">
        <span>projects.</span>
      </div><br>
      <div class="shit">
        <span>
          Shit I created
          <br>{`:-)`}
        </span>
        <div class="mostly">
          . . . and mostly finished
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="logoseperator">
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
            Me pretending to use my computer
          </p>
        </div>
      </div>
      <div class="mt-[3rem]">
        <Project
          title="Clevertrack"
          year=2023
          img="/projects/clevertrack-dark.png"
          link="https://www.clevertrack.dk/"
        >
          In 2022 I joined <a href="https://www.clevertrack.dk/" target="_blank">Clevertrack</a> as a part-time fullstack designer + developer. I build internal tools to help them scale up, and maintain the website. I also develop new features on the web app.
          <br><br>
          <!-- <a href="#Mostly Code">I was already working with Clevertrack in 2020.</a> -->
          <!-- <br><br> -->
          In 2023 I created the website blog (coming soon), and also aggregated some legacy .NET code to be used for internal tooling. I made a big push in the organisation to utilize the existing code, as my main focus is to make great business decisions, rather than coding for beauty.
        </Project>
        <Project
          title="shelly.run"
          year=2022
          img="/projects/shelly-run.png"
          link="https://github.com/nemzyx/shelly.run"
        >
          Initially created to teach my older sister how to code, <a href="https://github.com/nemzyx/shelly.run" target="_blank">shelly.run</a> evolved into a project with the potential to help many others.
          I designed Shelly the turtle as a relatable character to help beginners understand how state and variables eventually turn into useful systems.
          <br><br>
          <!-- A big innovation in the project is the reactive browser console, which enables players to program Shelly using JavaScript in the browser's built-in REPL environment.
          That makes it an accesible zero-config programming environment for beginners, while advanced users still get the full power of JavaScript. Shelly is a completely hackable turtle, while also being beginner-friendly.
          <br><br> -->
          Shelly is programmable in JavaScript via the browsers built in REPL console, thanks to my <a href="https://gist.github.com/nemzyx/625ef854a899653d5acf652b813f784f" target="_blank">reactive console</a> innovation.
          <br><br>
          Although still in early alpha, shelly.run is already <a href="https://shelly.run/" target="_blank">live</a> and you can find instructions for playing on the <a href="https://github.com/nemzyx/shelly.run" target="_blank">Github page</a>.
        </Project>
        <Project
          title="FPGA pong game"
          year=2022
          img="/projects/FPGA-pong.png"
          link="https://www.youtube.com/watch?v=oZGwaHUg-Vk&t=170s"
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
        >
          <a href="https://www.youtube.com/watch?v=n5alpcJM6nE" target="_blank">Mostly Code</a>
          was my first real developer job. I worked along my mentor Mads Østergaard, who hired me as his only employee. My work in Clevertrack actually began all the way back in 2020, as they were our biggest client. Mostly Code merged with Clevertrack in 2022.
          <br><br>
          However, we also had many other projects in Mostly Code, inlcuding <a href="https://danmarksopsamling.dk/" target="_blank">Like The Oceans We Rise</a>, and a political party quiz for a 2022 Danish election with the FHO organisation, <a href="https://kandidattest.fho.dk/" target="_blank">FHO Kandidattest</a>.
          <br><br>
          Unfortunately, our website <a href="https://web.archive.org/web/20220130101040/https://mostlycode.dk/" target="_blank">mostlycode.dk</a> have been lost to time.
        </Project>
      </div>
    </div>
    <Footer />
  </main>
</div>

<style lang="postcss">
  header,main { /* local variable */
    --offset: 80px;
    --split: calc((var(--vh, 100vh) - var(--bottom-h))/2
      + var(--offset));
    @media screen(md) {
      --split: calc((100vh - var(--bottom-h))/2);
    }
  }

  header {
    @apply fixed top-0 w-[100%];
    height: var(--split);
    @media screen(md) {
      top: var(--email-height);
      height: calc(100vh - var(--email-height) - var(--sep-height));
    }
    
    background-image: linear-gradient(90deg,
    #E7E7E7 0%,#E7E7E7 3%, #8381F7 46%,
    #9860FF 59%, #CEB0B0 86%, #EAB9FF 100%);

    @apply flex justify-center items-center;
    .content {
      color: white;
      font-family: 'PPNeueBit';
      @apply inline-block;
      div { @apply inline-block; }

      @apply relative top-[30px];
      .graph {
        @apply absolute top-[-3.3em] right-[2em];
        img { @apply h-[8em] }
        @media screen(md) {
          @apply top-[-5em] right-[3em];
          img { @apply h-[11em] }
        }
      }
      .projectstext { @apply text-5xl relative }
      .shit {
        @apply mt-[1rem] text-7xl relative;
        line-height: 0.8em;
      }
      .mostly {
        @apply text-[0.38em]; line-height: 0.6em;
        @apply relative left-[24%];
      }

      @media screen(md) {
        .projectstext { @apply text-6xl }
        .shit { @apply text-8xl }
        .mostly { @apply left-[30%] }
      }
    }
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
      }
    }
  }

  /* parallax -------------------------- */
  @media screen(md) {
    .container-3d {
      transform-style: preserve-3d;
    }
    header {
      position: absolute;
      top: 0;
      transform: translateY(calc(var(--email-height) / 2))
        translateZ(-10px) scale(2);
    }
  }
</style>
