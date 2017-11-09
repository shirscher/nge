import { IApiModule, IApiServer } from '@nge/api-core';
import { IContainer, IContainerBuilder } from '@nge/ioc-core';

import { HapiServer } from '../../HapiServer';

import initializeRoutes from './api/routes';
import { SystemController } from './api/systemController';
import { IProcessInfoQuery } from './core/IProcessInfoQuery';
import { ProcessInfoQuery } from './core/processInfoQuery';
import { Types } from './core/types';

const systemModule = (): IApiModule => {
    return {
        initialize: (containerBuilder: IContainerBuilder): void => {
            containerBuilder.register<SystemController>(SystemController).asSelf();
            containerBuilder.register<IProcessInfoQuery>(Types.IProcessInfoQuery).as(ProcessInfoQuery);
        },

        register: (server: IApiServer, container: IContainer): void => {
            const hapiServer = server as HapiServer;
            initializeRoutes(container, hapiServer.server);
        },
    };
};

export default systemModule;
