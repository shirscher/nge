import { Injectable } from '@nge/ioc-core';

import { IProcessInfoQueryResult } from './processInfoQueryResult';

/**
 * Query that retrieves information about the currently running process.
 */
@Injectable()
export class ProcessInfoQuery {

    /**
     * Executes the query.
     */
    public execute(): IProcessInfoQueryResult {
        return {
            env: process.env,
            nodeVersion: process.version,
            pid: process.pid,
            platform: process.platform,
        };
    }
}
