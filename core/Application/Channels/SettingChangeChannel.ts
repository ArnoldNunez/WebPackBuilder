import { IPCChannelInterface } from "../../Interfaces/IPCChannel";
import { IpcRequest } from "../../Interfaces/IPCRequest";


export class SettingsChangeChannel implements IPCChannelInterface {
    private readonly name:string = "SettingsChangeChannel";

    /**
     * Data context, view source of the settings change channel.
     */
    public DataContext:string;
    public Setting:string;


    constructor(dataContext: string, setting: string) 
    {
        this.DataContext = dataContext;
        this.Setting = setting;
    }


    getName(): string {
        return this.name;
    }
    
    getDataContext(): string {
        return this.DataContext;
    }

    handle(event: Electron.IpcMainEvent, request: IpcRequest): void {
        console.log("Settings Chage Channel handle...");
        // Use viewmodel locator
        // let vm: ViewModel = ViewModelLocator.ByName(this.DataContext);
        // if (vm != null) {
        //     vm.UpdateProp(this.Setting);
        // }
    }

}