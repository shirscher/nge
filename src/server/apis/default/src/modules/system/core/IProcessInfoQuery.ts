import { IProcessInfoQueryResult } from './processInfoQueryResult';

/**
 * Query that retrieves information about the currently running process.
 */
export interface IProcessInfoQuery {
    /**
     * Executes the query.
     */
    execute(): IProcessInfoQueryResult;
}
