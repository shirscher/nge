/**
 * Specifies how long a dependency instance should be maintained by the container.
 */
export declare enum LifetimeScope {
    /**
     * Every call to resolve should return a new instance.
     */
    Instance = 0,
    /**
     * Only one instance of the dependency will be created.
     */
    Singleton = 1,
}
