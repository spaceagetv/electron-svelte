import {
  ElectronAppInfo,
  findLatestBuild,
  parseElectronApp,
} from 'electron-playwright-helpers'

let appInfo: ElectronAppInfo

export function getAppInfo() {
  if (!appInfo) {
    const latestBuild = findLatestBuild()
    appInfo = parseElectronApp(latestBuild)
  }
  return appInfo
}
