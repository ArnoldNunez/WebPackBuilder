import { IpcMainEvent } from 'electron/main';
import { IpcRequest } from './IPCRequest';


/**
 * Represents a communication channel between render and main processes.
 */
export interface IPCChannelInterface {
    getName(): string;
    getDataContext(): string;
    handle(event: IpcMainEvent, request: IpcRequest): void;
}