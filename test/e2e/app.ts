import type { ElectronApplication } from 'playwright'

let app: ElectronApplication

export function setApp(application: ElectronApplication) {
  app = application
}

export function getApp() {
  if (!app) {
    throw new Error('App not set')
  }
  return app
}
