import * as Hapi from 'hapi';

import { Inject, Injectable } from '@nge/ioc-core';

import { IProcessInfoQuery } from '../core/IProcessInfoQuery';
import { Types } from '../core/types';

@Injectable()
export class SystemController {
    constructor(@Inject(Types.IProcessInfoQuery) public processInfoQuery: IProcessInfoQuery) {
    }

    public get(): Hapi.RouteAdditionalConfigurationOptions {
        return {
            description: 'Gets information about the currently running environment.',
            handler: (_request, reply) => {
                reply(this.processInfoQuery.execute());
            },
            // plugins: {
            //     'hapi-swagger': {
            //         responses: {
            //             '201': {
            //                 'description': 'Created Task.',
            //                 'schema': TaskModel.taskModel
            //             }
            //         }
            //     }
            // },
            tags: ['api', 'system'],
            // validate: {
            //     payload: TaskModel.createTaskModel
            // },
        };
    }
}
