<script lang="ts">
  // import 'agnostic-svelte/css/common.min.css'
  import { ipcRenderer } from 'electron'
  import { onMount } from 'svelte'
  import VanillaRangeText from './VanillaRangeText.svelte'
  import Button from '@smui/button'
  import Switch from '@smui/switch'
  import Slider from '@smui/slider'
  ;[VanillaRangeText, Button, Switch, Slider]

  let message = 'Hello from Svelte!'
  let value = 0
  let agreed = false
  let buttonClickCount = 0

  function increaseButtonClickCount() {
    buttonClickCount++
  }

  onMount(() => {
    ipcRenderer.on('message', (event, arg) => {
      message = arg
    })
  })
</script>

<main>
  <h1>{message}</h1>
  <VanillaRangeText bind:value label={'Vanilla Range + Text'} />
  <p>
    <Button on:click={increaseButtonClickCount}>SMUI Button</Button> click count:
    {buttonClickCount}
  </p>
  <p>
    <Switch bind:checked={agreed} /> SMUI Switch: {agreed
      ? 'Agreed'
      : 'Not Agreed'}
  </p>
  <p>
    <Slider bind:value min={0} max={100} /> SMUI Slider: {value}
  </p>
</main>
