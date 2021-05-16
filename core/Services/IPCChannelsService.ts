import { ipcMain } from "electron";
import { SettingsChangeChannel } from "../Application/Channels/SettingChangeChannel";
import { IPCChannelInterface } from "../Interfaces/IPCChannel"



/**
 * Service that handles creating/destroying IPC communication channels.
 */
export class IPCChannelsService {
    private ipcChannels: IPCChannelInterface[]
    


    constructor()
    {
        this.ipcChannels = [];
        this.CreateChannels();
    }


    
    /**
     * Register the communication channels with the IPC Main.
     */
    public registerChannels(): void {
        this.ipcChannels.forEach(channel => {
            ipcMain.on(channel.getName(), (event, request) => channel.handle(event, request) );
        });
    }

    /**
     * @returns string Name of the ipc channels in the service
     */
    public getChannelNames(): string[] {
        return this.ipcChannels.map(c => c.getName());        
    }



    private CreateChannels(): void {
        console.log("creating channels...");
        let channel:IPCChannelInterface = new SettingsChangeChannel("", "");
        this.ipcChannels.push(channel);
    }
}