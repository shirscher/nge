/**
 * Defines how a service is registered in a dependency injection container.
 */
export declare enum ContainerRegistrationType {
    /**
     * A concrete implementation is registered as itself.
     */
    Self = 0,
    /**
     * A class or interface is registered as another concrete implementation.
     */
    Class = 1,
    /**
     * A class or interface is registered using a factory function that will build the concrete implementation.
     */
    Factory = 2,
}
