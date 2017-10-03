import { IContainerBuilder, IDependencyModule, LifetimeScope } from '@nge/ioc-core';

import { IConfigStore } from '../configStore';
import { Types } from '../types';
import { JsonFileConfigStore } from './jsonFileConfigStore';

/**
 * Module that registers the JSON config store in a dependency injection container.
 */
export const jsonConfigStoreModule: IDependencyModule = {
    initialize(builder: IContainerBuilder, name?: string): void {
        const reg = builder.register<IConfigStore>(Types.IConfigStore)
                .as(JsonFileConfigStore)
                .withLifetime(LifetimeScope.Singleton);
        if (name) {
            reg.named(name);
        }
    },
};
