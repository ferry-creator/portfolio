<div>
  <slot />
</div>

<style>
  div {
    display: contents;
    color: inherit;
    background: linear-gradient(
      110deg,
           currentColor,
      45%, rgba(255, 255, 20, 1),
      55%, currentColor
    );
    background-size: 260% auto;
    background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
    animation: shine 2.5s ease-out infinite;
  }
  @keyframes shine {
    to { background-position: -200%; }
  }
</style>
