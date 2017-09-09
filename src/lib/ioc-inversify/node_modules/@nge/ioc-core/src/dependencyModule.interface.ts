import { IContainerBuilder } from './containerBuilder.interface';

/**
 * Interface for a module that registers a group of related dependencies in a container.
 */
export interface IDependencyModule {
    /**
     * Initializes the module by adding all necessary dependencies to the dependency injection container.
     * @param builder - The container builder used to register dependencies.
     */
    initialize(builder: IContainerBuilder): void;
}
