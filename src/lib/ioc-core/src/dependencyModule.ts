import { IContainerBuilder } from './containerBuilder';

/**
 * Initializes a module by adding all necessary dependencies to the dependency injection container.
 * @param builder - The container builder used to register dependencies.
 * @param name - If defined registers dependencies using the specified name.
 */
export type DependencyModule = (builder: IContainerBuilder, name?: string) => void;
