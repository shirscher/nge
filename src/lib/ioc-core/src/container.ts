/**
 * Interface for a dependency injection container.
 */
export interface IContainer {
    /**
     * Resolves a dependency from the container.
     * @type T - The type of dependency to resolve.
     * @param symbol - The symbol for the dependency type.
     * @param [name] - If specified the dependency will be registered with a name.
     * @returns An instance of the specified type that was registered in the container.
     * @throws Will throw an error if the specified type has not been registered in the container
     * or if the type has been registered more than once..
     */
    resolve<T>(symbol: symbol, name?: string): T;

    /**
     * Resolves all registered dependencies from the container that may have multiple implementations registered.
     * @type T - The type of dependency to resolve.
     * @param symbol - The symbol for the dependency type.
     * @param [name] - IF specified the dependency will be registered with a name.
     * @returns All instances of the specified type that were registered in the container.
     * @throws Will throw an error if the specified type has not been registered in the container.
     */
    resolveAll<T>(symbol: symbol, name?: string): T[];
}
