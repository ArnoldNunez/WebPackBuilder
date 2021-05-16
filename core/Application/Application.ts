import { BrowserWindow } from "electron";


/**
 * Represents the core application
 */
export class Application {
    constructor() { }


    /**
     * Called when application is created.
     * Create any application wide services here. 
     */
    public InitServices(): void {
        console.log("Init services...");
    }

    /**
     * Called when application is created.
     * Create application wide managers.
     */
    public InitManagers(): void {
        console.log("Init Managers...");
    }

    /**
     * Shows the main window
     */
    public ShowMainWindow(): void {
        let mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            // webPreferences: {
            //   preload: path.join(__dirname, 'preload.js')
            // }
        })

        mainWindow.loadFile('index.html');
    }

    /**
     * Called when application is exiting
     */
    public OnExit(): void {
        // Do cleanup.
        console.log("Exiting...")
    }
}