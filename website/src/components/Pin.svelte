<div class="pin">
  <div class="vertical"></div>
  <div class="horizontal"></div>
</div>

<style>
  .pin {
    --width:  3px;
    --length: 23px;
    transform:
      translateX(calc(var(--length)/2*-1))
      translateY(calc(var(--length)/2*-1));
  }
  .vertical, .horizontal {
    background: var(--color);
    position: absolute;
  }

  .vertical {
    height: var(--length);
    width: var(--width);
    left: calc(calc(var(--length)/2) - calc(var(--width)/2))
  }
  .horizontal {
    height: var(--width);
    width: var(--length);
    top: calc(calc(var(--length)/2) - calc(var(--width)/2))
  }
</style>
