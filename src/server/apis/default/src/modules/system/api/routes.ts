import * as hapi from 'hapi';

import { IContainer } from '@nge/ioc-core';

import { SystemController } from './systemController';

const initializeRoutes = (container: IContainer, server: hapi.Server): void => {
    const systemController = container.resolve<SystemController>(SystemController);

    server.route([
        // {
        //     method: 'GET',
        //     path: '/dependencies',
        // },
        // {
        //     handler: undefined,
        //     method: 'GET',
        //     path: 'environment',
        // },
        // {
        //     method: 'GET',
        //     path: '/libs',
        // },
        // {
        //     method: 'GET',
        //     path: '/status',
        // },
        // {
        //     method: 'GET',
        //     path: '/version',
        // },
        {
            config: systemController.get(),
            method: 'GET',
            path: '/',
        },
    ]);
};

export default initializeRoutes;
