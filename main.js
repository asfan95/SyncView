const electron = require('electron')
var eNotify;
// var eNotify = require("./notify.js");

// Module to control application life.
const app = electron.app
const notify = electron.Notification 
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
const {ipcMain} = require('electron');

// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
    // Displays the object sent from the renderer process:
    //{
    //    message: "Hi",
    //    someData: "Let's go"
    //}
    console.log(
        arg
    );
});


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
// Change config options

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow, function(){

})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
// setInterval(() => {
//     eNotify = require('electron-notify');
//     eNotify.setConfig({
//       appIcon: path.join(__dirname, 'images/icon.png'),
//       displayTime: 6000
//   });
//   eNotify.notify({ title: 'Notification title', text: 'Some text' });


//     app.setAppUserModelId("appid");
//     let nt = new notify({
//       title:"test",
//       body: "body"
//     });
//     console.log(notify.isSupported())
//     nt.show() 
//   }, 5000);

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
