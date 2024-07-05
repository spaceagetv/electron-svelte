<script>
  import { onMount } from 'svelte'
  import { ipcRenderer } from 'electron'
  import Component from './Component.svelte'
  // import Slider from '@smui/slider'

  // keep from being tree-shaken
  // Component
  // Slider

  let message = 'Hello from Svelte!'

  onMount(() => {
    ipcRenderer.on('message', (event, arg) => {
      message = arg
    })
  })
</script>

<main>
  <h1>{message}</h1>
  <Component />
</main>
