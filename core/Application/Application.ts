import { BrowserWindow } from "electron";
import { DEVELOPMENT_URL } from "../Models/constants";
import { Arguments } from "../utils/argument-parser";


/**
 * Represents the core application
 */
export class Application {
    private mainWindow: BrowserWindow | undefined;

    constructor(private envArgs: Partial<Arguments>) { }


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
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            // webPreferences: {
            //   preload: path.join(__dirname, 'preload.js')
            // }
        });

        // Set client app load method
        if (this.envArgs.development) {
            this.mainWindow.loadURL(DEVELOPMENT_URL);
        } else {
            this.mainWindow.loadFile('index.html');
        }
    }

    /**
     * Called when application is exiting
     */
    public OnExit(): void {
        // Do cleanup.
        console.log("Exiting...")
    }
}