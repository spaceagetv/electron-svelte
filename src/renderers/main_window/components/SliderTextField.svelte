<script>
  import Slider from '@smui/slider'
  import Textfield from '@smui/textfield'
  import { createEventDispatcher } from 'svelte'

  export let value = 50
  export let min = 0
  export let max = 100
  export let step = 0.1
  export let discrete = false
  export let markers = false
  export let tickMarks = []

  const dispatch = createEventDispatcher()

  // Dispatch input event whenever the value changes
  $: dispatch('input', { value })
</script>

<div class="container">
  <div class="slider-text-slider">
    <Slider bind:value {min} {max} {step} {discrete} {markers} {tickMarks} />
  </div>
  <div class="slider-text-input">
    <Textfield bind:value type="number" {min} {max} {step} />
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .slider-text-slider {
    flex: 1;
  }
  .slider-text-input {
    width: 10em;
  }
</style>
