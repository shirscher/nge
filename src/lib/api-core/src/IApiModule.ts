import { IContainer, IContainerBuilder } from '@nge/ioc-core';

import { IApiServer } from './IApiServer';

export interface IApiModule {
    /**
     * Initializes dependencies required by the module.
     *
     * @param containerBuilder The dependency injection container builder to register services in.
     */
    initialize(containerBuilder: IContainerBuilder): void;

    /**
     * Registers the module with the server, using services provided by the specified container.
     *
     * @param server API server to register the module in.
     * @param container Dependency injection container that can be used to resolve services required by the module.
     */
    register(server: IApiServer, container: IContainer): void;
}
