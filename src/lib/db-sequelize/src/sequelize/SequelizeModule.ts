import { IContainer, IContainerBuilder, IDependencyModule, LifetimeScope } from '@nge/ioc-core';

import { IDatabase } from '../core/IDatabase';
import { IDatabaseFactory } from '../core/IDatabaseFactory';
import { IDbTransaction } from '../core/IDbTransaction';
import { IRepository } from '../core/IRepository';

import { SequelizeDatabase } from './SequelizeDatabase';
import { SequelizeDatabaseFactory } from './SequelizeDatabaseFactory';
import { SequelizeRepository } from './SequelizeRepository';
import { SequelizeTransaction } from './SequelizeTransaction';

/**
 * Module that registers the console logger in a dependency injection container.
 */
export const sequelizeModule: IDependencyModule = {
    initialize(builder: IContainerBuilder, name?: string): void {
        const factoryReg = builder.register<IDatabaseFactory>(Types.ILoggerFactory)
                .as(SequelizeDatabaseFactory)
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
