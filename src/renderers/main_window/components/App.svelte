<script lang="ts">
  // import 'agnostic-svelte/css/common.min.css'
  import { ipcRenderer } from 'electron'
  import { onMount } from 'svelte'
  import VanillaRangeText from './VanillaRangeText.svelte'
  ;[VanillaRangeText]

  let message = 'Hello from Svelte!'
  let value = 0
  let agreed = false

  onMount(() => {
    ipcRenderer.on('message', (event, arg) => {
      message = arg
    })
  })
</script>

<main>
  <h1>{message}</h1>
  <VanillaRangeText bind:value label={'Vanilla Range + Text'} />
</main>
