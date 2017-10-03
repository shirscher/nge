import { IContainerBuilder } from './containerBuilder';

/**
 * Interface for a module that registers a group of related dependencies in a container.
 */
export interface IDependencyModule {
    /**
     * Initializes the module by adding all necessary dependencies to the dependency injection container.
     * @param builder - The container builder used to register dependencies.
     * @param name - If defined registers dependencies using the specified name.
     */
    initialize(builder: IContainerBuilder, name?: string): void;
}
