import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import 'svelte-material-ui/themes/material.css'
import './index.less'

import App from './components/App.svelte'

export let svelteApp: App

// wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  svelteApp = new App({
    target: document.body,
  })
})

console.log(
  '👋 This message is being logged by "renderer.ts", included via webpack'
)
