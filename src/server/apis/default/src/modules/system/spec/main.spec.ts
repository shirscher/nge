import { InversifyContainerBuilder } from '@nge/ioc-inversify';

import { SystemController } from '../api/systemController';
import systemModule from '../main';

describe('systemModule', () => {
    describe('initialize', () => {
        it('should register SystemController in the DI container', () => {
            const containerBuilder = new InversifyContainerBuilder();

            systemModule().initialize(containerBuilder);

            const container = containerBuilder.build();
            const controller = container.resolve<SystemController>(SystemController);

            expect(controller).toBeTruthy();
        });
    });
});
