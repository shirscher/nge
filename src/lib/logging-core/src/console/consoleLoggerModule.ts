import { IContainer, IContainerBuilder, IDependencyModule, LifetimeScope } from '@nge/ioc-core';

import { ILogger } from '../logger';
import { ILoggerFactory } from '../loggerFactory';
import { Types } from '../types';
import { ConsoleLoggerFactory } from './consoleLoggerFactory';

/**
 * Module that registers the console logger in a dependency injection container.
 */
export const consoleLoggerModule: IDependencyModule = {
    initialize(builder: IContainerBuilder, name?: string): void {
        const factoryReg = builder.register<ILoggerFactory>(Types.ILoggerFactory)
                .as(ConsoleLoggerFactory)
                .withLifetime(LifetimeScope.Singleton);
        if (name) {
            factoryReg.named(name);
        }

        const loggerReg = builder.register<ILogger>(Types.ILogger)
            .usingFactory((c: IContainer) => c.resolve<ILoggerFactory>(Types.ILoggerFactory).create())
            .withLifetime(LifetimeScope.Singleton);
        if (name) {
            loggerReg.named(name);
        }
    },
};
