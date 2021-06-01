import { app, BrowserWindow } from 'electron';
import { Application } from "./core/Application/Application";
import { ArgumentParser } from './core/utils/argument-parser'

const env = ArgumentParser.parse(process.argv);
const application = new Application(env);

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
