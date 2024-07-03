<script lang="ts">
  import { onMount } from 'svelte'
  import { ipcRenderer } from 'electron'

  let message = ''

  onMount(() => {
    ipcRenderer.on('message', (event, arg) => {
      message = arg
    })
  })
</script>

<main>
  <h1>{message}</h1>
</main>
