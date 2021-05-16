
/**
 * Interface for an IPC Requst
 */
export interface IpcRequest {
    /**
     * The channel to use for the response
     */
    responseChannel?: string;
  
    /**
     * Parameters that the channel may accept
     */
    params?: string[];
}