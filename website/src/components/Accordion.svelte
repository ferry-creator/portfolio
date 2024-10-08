<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  let details, summary, content
  let animation = null
  let isClosing = false, isExpanding = false

  export const onClick = (e) => {
    e.preventDefault();
    details.style.overflow = 'hidden'

    // Check if the element is being closed or is already closed
    if (isClosing || !details.open) {
      open(e)
    // Check if the element is being openned or is already open
    } else if (isExpanding || details.open) {
      shrink(e)
    }
  }

  const open = (e) => {
    details.style.height = `${details.offsetHeight}px`
    // Force the [open] attribute on the details element
    details.open = true;
    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => expand())
    // Emit Svelte event
    dispatch('open', {
			clickEvent: e
		})
  }

  const expand = () => {
    // Set the element as "being expanding"
    isExpanding = true
    // Get the current fixed height of the element
    const startHeight = `${details.offsetHeight}px`;
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

    // If there is already an animation running
    if (animation) {
      // Cancel the current animation
      animation.cancel();
    }

    // Start a WAAPI animation
    animation = details.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 300,
      easing: 'ease'
    });

    animation.onfinish = () => onAnimationFinish(true)
    animation.oncancel = () => isExpanding = false
  }

  const shrink = (e) => {
    isClosing = true
    const startHeight = `${details.offsetHeight}px`
    const endHeight = `${summary.offsetHeight}px`

    // If there is already an animation running
    if (animation) {
      animation.cancel()
    }

    // Start a WAAPI animation
    animation = details.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 200,
      easing: 'ease'
    })

    animation.onfinish = () => onAnimationFinish(false)
    animation.oncancel = () => isClosing = false

    // Emit Svelte event
    dispatch('close', {
			clickEvent: e
		})
  }

  const onAnimationFinish = (open) => {
    details.open = open
    animation = null
    isClosing = false
    isExpanding = false
    // Remove the overflow hidden and the fixed height
    details.style.height = details.style.overflow = ''
  }
</script>

<details bind:this={details}>
  <summary bind:this={summary} on:click={onClick}>
    <slot name="summary" />
  </summary>
  <div bind:this={content}>
    <slot name="content" />
  </div>
</details>

<style lang="postcss">
  details summary::-webkit-details-marker { display:none; }
  details {
    summary {
      list-style: none;
      cursor: pointer;
      user-select: none;
      &::marker{
        display: none;
        /* @apply text-[greenyellow]; */
      }
    }
  }
</style>
