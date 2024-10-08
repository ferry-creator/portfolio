<script>
  import { tagModals } from '$components/pages/projects/Project.svelte'
  import Modal from '$components/Modal.svelte'

  const STARTUP = '#Startup'
  const AI = '#AI'
  const CSHARP = ' C#'
</script>

<Modal bind:this={tagModals[STARTUP]}>
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
<Modal bind:this={tagModals[AI]}>
  AI
</Modal>
<Modal bind:this={tagModals[CSHARP]}>
  C#
</Modal>

<style lang="postcss">
  p {
    @apply inline;
  }
</style>