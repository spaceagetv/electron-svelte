import { app, BrowserWindow, Menu, MenuItem } from 'electron'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

let mainWindow: BrowserWindow | null

const createWindow = (): void => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

let count = 0

function addItemToApplicationMenu() {
  const menu = Menu.getApplicationMenu()
  if (!menu) {
    throw new Error('Application menu not found')
  }
  // log.info('Application menu found', menu)

  const menuItem = new MenuItem({
    label: 'Send Message',
    click: () => {
      mainWindow?.webContents.send(
        'message',
        'Hello from the main process! ' + count++
      )
    },
    accelerator: 'Space',
  })

  // find the File menu
  const fileMenu = menu?.items.find((item) => item.label === 'File')
  if (!fileMenu) {
    throw new Error('File menu not found')
  }
  fileMenu.submenu?.insert(0, menuItem)

  Menu.setApplicationMenu(menu)
}

function init() {
  createWindow()
  addItemToApplicationMenu()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', init)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
