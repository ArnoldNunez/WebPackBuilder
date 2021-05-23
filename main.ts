// const { app, BrowserWindow } = require('electron')
// const path = require('path')

// const path = require('path')
import { app, BrowserWindow } from 'electron';
import { Application } from "./core/Application/Application";
import { ArgumentParser } from './utils/argument-parser'

let application = new Application();

const env = ArgumentParser.parse(process.argv);

if (env.development) {

}

app.whenReady().then(() => {

  application.InitServices();
  application.InitManagers();
  application.ShowMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      application.ShowMainWindow();
    }
  })

})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    application.OnExit();
  }
})
