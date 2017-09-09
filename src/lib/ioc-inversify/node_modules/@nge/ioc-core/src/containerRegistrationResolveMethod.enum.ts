/**
 * Defines how a service is resolved in a dependency injection container.
 */
export enum ContainerRegistrationResolveMethod {
    /**
     * A concrete implementation is registered as itself.
     */
    Self,

    /**
     * A class or interface is registered as another concrete implementation.
     */
    Class,

    /**
     * A class or interface is registered using a factory function that will build the concrete implementation.
     */
    Factory,
}
