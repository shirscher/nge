import { IContainer, IContainerBuilder, IDependencyModule, LifetimeScope } from '@nge/ioc-core';

import { ILogger } from '../logger.interface';
import { ILoggerFactory } from '../loggerFactory.interface';
import { Types } from '../types';
import { MemoryLoggerFactory } from './memoryLoggerFactory.class';

export class MemoryLoggerModule implements IDependencyModule {
    constructor(private name?: string) {
    }

    public initialize(builder: IContainerBuilder): void {
        const factoryReg = builder.register<ILoggerFactory>(Types.ILoggerFactory)
                 .as(MemoryLoggerFactory)
                 .withLifetime(LifetimeScope.Singleton);
        if (this.name) {
            factoryReg.named(this.name);
        }

        const loggerReg = builder.register<ILogger>(Types.ILogger)
            .usingFactory((c: IContainer) => c.resolve<ILoggerFactory>(Types.ILoggerFactory).create())
            .withLifetime(LifetimeScope.Singleton);
        if (this.name) {
            loggerReg.named(this.name);
        }
    }
}
