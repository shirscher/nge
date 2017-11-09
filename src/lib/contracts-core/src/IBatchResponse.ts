import { IErrorResponse } from './IErrorResponse';
import { IResponse } from './IResponse';

/**
 * The response contract for a batch request (IBatchRequest).
 */
export interface IBatchResponse {
    /**
     * Array of responses from requests contained in the batch request.
     * @description Responses
     */
    responses: Array<IResponse | IErrorResponse>;
}
