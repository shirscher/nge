import { BatchRequestMethod } from 'src/BatchRequestMethod';
import { IRequest } from 'src/IRequest';

/**
 * Wraps multiple requests into a single call.
 */
export interface IBatchRequest {
    /**
     * Determines how multiple requests are executed an how failures are handled.
     */
    method?: BatchRequestMethod;

    /**
     * The requests to be executed.
     */
    requests: Array<{ type: string, request: IRequest }>;
}
