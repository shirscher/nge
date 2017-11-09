import { IContainer } from './container';
import { ContainerRegistration } from './containerRegistration';
import { INewable } from './newable';

/**
 * Interface for a container builder that can be used to register dependencies and create an
 * instance of a dependency injection container.
 */
export interface IContainerBuilder {
    /**
     * Registers a dependency in the container.
     * @type T - The type of the service to register.
     * @param type - The symbol used to refer to the service type.
     * @param constructor - The type of the concrete class to create.
     * @param [name] - If specified registers the service as a named dependency.
     * @returns A ContainerRegistration object that can be used to further configure the registration.
     */
    register<T>(type: symbol | INewable<T>): ContainerRegistration<T>;

    /**
     * Builds the container instance.
     * @returns An instance of the container with the dependencies registered by the builder.
     */
    build(): IContainer;
}
