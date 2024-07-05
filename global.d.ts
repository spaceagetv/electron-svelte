// electron-forge injected entrypoint globals
// see: ../forge.config.js > config > plugins > renders > entryPoints
declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// allow importing of files starting with "file-loader!"
declare module 'file-loader!*' {
  const url: string
  export default url
}

declare module '*.svelte' {
  export { SvelteComponent as default } from 'svelte'
}
