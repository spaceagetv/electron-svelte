<script lang="ts">
  import { MDCSlider } from '@material/slider'
  import { onMount, getContext } from 'svelte'
  import { get_current_component } from 'svelte/internal'
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal'
  import Ripple from '@smui/ripple'

  type OwnProps = {
    use?: ActionArray
    class?: string
    disabled?: boolean
    discrete?: boolean
    step?: number
    min?: number
    max?: number
    value?: number
    valueText?: string
    valueText$use?: ActionArray
    valueText$class?: string
    valueText$style?: string
    valueText$role?: string
    valueText$ariaHidden?: boolean
    valueText$ariaLive?: 'off' | 'polite' | 'assertive'
    valueText$ariaAtomic?: boolean
    valueText$ariaRelevant?: 'additions' | 'removals' | 'text' | 'all'
    valueText$ariaBusy?: boolean
    valueText$ariaValueText?: string
    valueText$ariaValueNow?: string
    valueText$ariaValueMin?: string
    valueText$ariaValueMax?: string
    valueText$ariaValueTextTemplate?: string
    valueText$ariaValueNowTemplate?: string
    valueText$ariaValueMinTemplate?: string
    valueText$ariaValueMaxTemplate?: string
    valueText$ariaValueText$use?: ActionArray
    valueText$ariaValueNow$use?: ActionArray
    valueText$ariaValueMin$use?: ActionArray
    valueText$ariaValueMax$use?: ActionArray
    valueText$ariaValueTextTemplate$use?: ActionArray
    valueText$ariaValueNowTemplate$use?: ActionArray
    valueText$ariaValueMinTemplate$use?: ActionArray
    valueText$ariaValueMaxTemplate$use?: ActionArray
    valueText$ariaValueText$class?: string
    valueText$ariaValueNow$class?: string
    valueText$ariaValueMin$class?: string
    valueText$ariaValueMax$class?: string
    valueText$ariaValueTextTemplate$class?: string
    valueText$ariaValueNowTemplate$class?: string
  }

  export let use: OwnProps['use']
  export let class: OwnProps['class']
  export let disabled: OwnProps['disabled']
  export let discrete: OwnProps['discrete']
  export let step: OwnProps['step']
  export let min: OwnProps['min']
  export let max: OwnProps['max']
  export let value: OwnProps['value']
  export let valueText: OwnProps['valueText']
  export let valueText$use: OwnProps['valueText$use']
  export let valueText$class: OwnProps['valueText$class']
  export let valueText$style: OwnProps['valueText$style']
  export let valueText$role: OwnProps['valueText$role']
  export let valueText$ariaHidden: OwnProps['valueText$ariaHidden']
  export let valueText$ariaLive: OwnProps['valueText$ariaLive']
  export let valueText$ariaAtomic: OwnProps['valueText$ariaAtomic']
  export let valueText$ariaRelevant: OwnProps['valueText$ariaRelevant']
  export let valueText$ariaBusy: OwnProps['valueText$ariaBusy']
  export let valueText$ariaValueText: OwnProps['valueText$ariaValueText']
  export let valueText$ariaValueNow: OwnProps['valueText$ariaValueNow']
  export let valueText$ariaValueMin: OwnProps['valueText$ariaValueMin']
  export let valueText$ariaValueMax: OwnProps['valueText$ariaValueMax']
  export let valueText$ariaValueTextTemplate: OwnProps['valueText$ariaValueTextTemplate']
  export let valueText$ariaValueNowTemplate: OwnProps['valueText$ariaValueNowTemplate']
  export let valueText$ariaValueMinTemplate: OwnProps['valueText$ariaValueMinTemplate']
  export let valueText$ariaValueMaxTemplate: OwnProps['valueText$ariaValueMaxTemplate']
  export let valueText$ariaValueText$use: OwnProps['valueText$ariaValueText$use']
  export let valueText$ariaValueNow$use: OwnProps['valueText$ariaValueNow$use']
  export let valueText$ariaValueMin$use: OwnProps['valueText$ariaValueMin$use']
  export let valueText$ariaValueMax$use: OwnProps['valueText$ariaValueMax$use']
  export let valueText$ariaValueTextTemplate$use: OwnProps['valueText$ariaValueTextTemplate$use']
  export let valueText$ariaValueNowTemplate$use: OwnProps['valueText$ariaValueNowTemplate$use']
  export let valueText$ariaValueMinTemplate$use: OwnProps['valueText$ariaValueMinTemplate$use']
  export let valueText$ariaValueMaxTemplate$use: OwnProps['valueText$ariaValueMaxTemplate$use']
  export let valueText$ariaValueText$class: OwnProps['valueText$ariaValueText$class']
  export let valueText$ariaValueNow$class: OwnProps['valueText$ariaValueNow$class']
  export let valueText$ariaValueMin$class: OwnProps['valueText$ariaValueMin$class']
  export let valueText$ariaValueMax$class: OwnProps['valueText$ariaValueMax$class']
  export let valueText$ariaValueTextTemplate$class: OwnProps['valueText$ariaValueTextTemplate$class']
  export let valueText$ariaValueNowTemplate$class: OwnProps['valueText$ariaValueNowTemplate$class']

  const { subscribe, set } = getContext('SMUI:slider')

  let mdcSlider: MDCSlider
  let ripple: Ripple

  let element: HTMLDivElement
  let slider: HTMLDivElement
  let valueTextElement: HTMLDivElement

  let valueText$useActions: ActionArray
  let valueText$ariaValueText$useActions: ActionArray
  let valueText$ariaValueNow$useActions: ActionArray
  let valueText$ariaValueMin$useActions: ActionArray
  let valueText$ariaValueMax$useActions: ActionArray
  let valueText$ariaValueTextTemplate$useActions: ActionArray
  let valueText$ariaValueNowTemplate$useActions: ActionArray
  let valueText$ariaValueMinTemplate$useActions: ActionArray
  let valueText$ariaValueMaxTemplate$useActions: ActionArray

</script>

<div
  class="mdc-slider ${classMap({
    'mdc-slider--discrete': discrete,
    'mdc-slider--disabled': disabled,
  })}"
  bind:this={element}
  use:forwardEventsBuilder={() => [
    'MDCSlider:change',
    'MDCSlider:input',
    'MDCSlider:keydown',
    'MDCSlider:keyup',
    'MDCSlider:click',
    'MDCSlider:focus',
    'MDCSlider:blur',
  ]}
  on:click={handleClick}
  on:keydown={handleKeydown}
  on:keyup={handleKeyup}
  on:blur={handleBlur}
  on:focus={handleFocus}
>
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track"></div>
    {#if discrete}
      <div class="mdc-slider ${classMap({ 'mdc-slider--discrete': discrete })}">
        <div class="mdc-slider mdc-slider__track-marker-container"></div>
      </div>
    {/if}
  </div>
  <div class="mdc-slider__thumb-container">
    <div class="mdc-slider__pin">
      <span class="mdc-slider mdc-slider__pin-value-marker"></span>
    </div>
    <svg
      class="mdc-slider__thumb"
      width="21"
      height="21"
      viewBox="-10 -10 21 21"
    >
      <circle cx="0" cy="0" r="7"></circle>
    </svg>
    <div class="mdc-slider__focus-ring"></div>
  </div>
</div>

{#if valueText}
  <div
    class="mdc-slider__value-indicator ${classMap({
      'mdc-slider__value-indicator--discrete': discrete,
    })}"
    bind:this={valueTextElement}
    use:forwardEventsBuilder={() => [
      'MDCSlider:change',
      'MDCSlider:input',
      'MDCSlider:keydown',
      'MDCSlider:keyup',
      'MDCSlider:click',
      'MDCSlider:focus',
      'MDCSlider:blur',
    ]}
    on:click={handleClick}
    on:keydown={handleKeydown}
    on:keyup={handleKeyup}
    on:blur={handleBlur}
    on:focus={handleFocus}
  >
    <div class="mdc-slider mdc-slider__value-indicator-text">
      {#if valueText$use}
        {#each valueText$use as action (action)}
          {#if action}
            {#if action === 'class'}
              class="{valueText$class}"
            {:else}
              {action}
            {/if}
          {/if}
        {/each}
      {/if}

      {#if valueText$style}
        style="{valueText$style}"
      {/if}

      {#if valueText$role}
        role="{valueText$role}"
      {/if}

      {#if valueText$ariaHidden}
        aria-hidden="{valueText$ariaHidden}"
      {/if}

      {#if valueText$ariaLive}
        aria-live="{valueText$ariaLive}"
      {/if}

      {#if valueText$ariaAtomic}
        aria-atomic="{valueText$ariaAtomic}"
      {/if}

      {#if valueText$ariaRelevant}
        aria-relevant="{valueText$ariaRelevant}"
      {/if}

      {#if valueText$ariaBusy}
        aria-busy="{valueText$ariaBusy}"
      {/if}

      {#if valueText$ariaValueText}
        aria-valuetext="{valueText$ariaValueText}"
      {/if}

      {#if valueText$ariaValueNow}
        aria-valuenow="{valueText$ariaValueNow}"
      {/if}

      {#if valueText$ariaValueMin}
        aria-valuemin="{valueText$ariaValueMin}"
      {/if}

      {#if valueText$ariaValueMax}
        aria-valuemax="{valueText$ariaValueMax}"
      {/if}

      {#if valueText$ariaValueTextTemplate}
        aria-valuetext="{valueText$ariaValueTextTemplate}"
      {/if}

      {#if valueText$ariaValueNowTemplate}
        aria-valuenow="{valueText$ariaValueNowTemplate}"
      {/if}

      {#if valueText$ariaValueMinTemplate}
        aria-valuemin="{valueText$ariaValueMinTemplate}"
      {/if}

      {#if valueText$ariaValueMaxTemplate}
        aria-valuemax="{valueText$ariaValueMaxTemplate}"
      {/if}
    </div>
  </div>
{/if}

{#if valueText}
  {#if valueText$ariaValueText$use}
    {#each valueText$ariaValueText$use as action (action)}
      {#if action}
        {#if action === 'class'}
          {#if valueText$ariaValueText$class}
            <div class={valueText}></div>
          {/if}
        {:else}
          {action}
        {/if}
      {/if}
    {/each}
  {/if}
{/if}
