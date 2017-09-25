import { IContainer, IContainerBuilder, LifetimeScope } from '@nge/ioc-core';

import { ILogger } from '../logger';
import { ILoggerFactory } from '../loggerFactory';
import { Types } from '../types';
import { MemoryLoggerFactory } from './memoryLoggerFactory';

/**
 * Module that registers the console logger in a dependency injection container.
 * @param builder The container builder to register dependencies in.
 * @param name If defined registers the logger as a named dependency.
 */
export function initMemoryLogger(builder: IContainerBuilder, name?: string): void {
    const factoryReg = builder.register<ILoggerFactory>(Types.ILoggerFactory)
             .as(MemoryLoggerFactory)
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
}
