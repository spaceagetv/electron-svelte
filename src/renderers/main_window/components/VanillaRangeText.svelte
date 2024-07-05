<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  export let label = ''
  export let value = 50
  export let min = 0
  export let max = 100

  const dispatch = createEventDispatcher()

  // Dispatch input event whenever the value changes
  $: dispatch('input', { value })

  function selectAll(event) {
    event.target.select()
  }
</script>

<div class="container">
  {#if label}<label class="van-rangetext-label" for="van-rangetext-slider"
      >{label}</label
    >{/if}
  <div class="van-rangetext-container">
    <input type="range" bind:value {min} {max} class="van-rangetext-slider" />
    <input
      type="text"
      bind:value
      class="van-rangetext-text"
      on:click={selectAll}
    />
  </div>
</div>

<style>
  .van-rangetext-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  input[type='range'] {
    flex: 1;
  }
  input[type='text'] {
    width: 2em;
  }
</style>
