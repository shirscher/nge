/**
 * Specifies how long a dependency instance should be maintained by the container.
 */
export enum LifetimeScope {
    /**
     * Every call to resolve should return a new instance.
     */
    Instance,

    /**
     * Only one instance of the dependency will be created.
     */
    Singleton,

    // TODO: Implement "Context" lifetime that resolves for each nested container. Requires container nesting.
}
