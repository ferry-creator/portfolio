<script>
  export let clientSideThumbhash = false
</script>

<svelte:head>
  <script>
    // Once the svelte component mounts
    // svelte takes over the src attribute
    // in hostile fashion - removing it!
    // - even though we set it before the component mounted.
    // That is the problem: Changing the DOM content
    // before component mounts. When it does mounts, svelte
    // resets our changes.
    // Solution: track changes here,
    // then replicate the changes in onMount
    // this is a problem in browsers that don't use caching!
    // (any? still annoying...)
    window.imageLoaderSources = {}

    const getLoadstack = (img) => {
      const { loadstack } = img.dataset
      return loadstack.split(',')
    }

    const imageLoaderQueue = [] // promises!
    const imageLoaderState = {} // track index and promise resolver by id
    const imageSourcesLoaded = {} // track individual sources loaded

    const imageLoaderObserver = new IntersectionObserver((entries, observer) => {
      for(const entry of entries) {
        const { target } = entry
        if(entry.isIntersecting) {
          const id = +target.id.slice(1)
          const img = document.querySelector(`img#i${id}`)
          const loadstack = getLoadstack(img)

          img.src = loadstack[0]
          window.imageLoaderSources[id] = loadstack[0]
          imageSourcesLoaded[id] = new Set() // initialize
          let resolve = null
          const promise = new Promise(r => resolve = r)
          imageLoaderState[id] = { resolve, index: 0 }
          imageLoaderQueue.push(promise)

          observer.unobserve(target)
        }
      }
    })
    
    const imagesLoadedBeforeMount = new Set()
    async function imageLoader(id, caller, onmount=false) {
      if(caller === 'image' && !onmount) imagesLoadedBeforeMount.add(id)

      const preview = document.querySelector(`img#p${id}`)
      const img = document.querySelector(`img#i${id}`)

      if(caller === 'preview') {
        imageLoaderObserver.observe(preview)
      }

      if(caller === 'image') {
        const loadstack = getLoadstack(img)
        if(imageLoaderState[id].index >= loadstack.length) return
        const src = loadstack[imageLoaderState[id].index]
        if(imageSourcesLoaded[id].has(src)) return
        imageSourcesLoaded[id].add(src)
        console.log(id, "image loaded!", src)
        img.style.visibility = 'visible'
        img.fetchPriority = 'low'
        imageLoaderState[id].resolve()
        // await all initial src promises
        // dynamic sequential version of Promise.all:
        while(imageLoaderQueue.length) {
          await imageLoaderQueue.shift()
        }

        imageLoaderState[id].index++
        if(imageLoaderState[id].index < loadstack.length) {
          const nextSrc = loadstack[imageLoaderState[id].index]
          img.src = nextSrc
          window.imageLoaderSources[id] = nextSrc
          console.log(id, "loading next: ", nextSrc)
        }
      }
    }
  </script>
</svelte:head>