<script>
  import ChirpBox from "$components/demos/ChirpBox.svelte"
</script>

<div>
  <span class="h-[70%]">
    <ChirpBox
      w=16 h=32
      cx=2 cy=-1 r=0.4
    />
  </span>
</div>

<style>
  div {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }
</style>
