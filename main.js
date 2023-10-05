const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        title: 'Control Pane'
    })

    const child = new BrowserWindow({
        width: 800,
        height: 600,
        parent: win,
        title: 'Scoreboard',
    })

    // and load the index.html of the app.
    win.loadURL('http://localhost:5173')
    child.loadURL('http://localhost:5173')

    //   Open the DevTools.
    win.webContents.openDevTools({
        mode: 'detach'
    })

    child.show()
}

app.whenReady().then(createWindow)
