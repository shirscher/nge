import { IContainer } from './container.interface';
import { ContainerRegistrationResolveMethod } from './containerRegistrationResolveMethod.enum';
import { LifetimeScope } from './lifetimeScope.enum';
/**
 * Represents a registration in a IContainerBuilder that can be used to configure the dependency.
 */
export declare class ContainerRegistration<T> {
    protected _symbol: symbol;
    protected _method: ContainerRegistrationResolveMethod;
    protected _factory: (container: IContainer) => T;
    protected _classType: new (...args: any[]) => T;
    protected _lifetime: LifetimeScope;
    protected _name?: string;
    /**
     * Gets the symbol used to look up the dependency.
     */
    readonly symbol: symbol;
    /**
     * Gets the method used to resolve the dependency (e.g. using a factory method).
     */
    readonly method: ContainerRegistrationResolveMethod;
    /**
     * If the resolve method is ContainerRegistrationResolveMethod.Factory, gets the factory function that will be used
     * to create the instance.
     */
    readonly factory: (container: IContainer) => T;
    /**
     * If the resolve method is ContainerRegistrationResolveMethod.Class, gets the class type (or constructor method)
     * that will be created when the dependency is resolved.
     */
    readonly classType: new (...args: any[]) => T;
    /**
     * Gets the lifetime scope of the dependency (e.g. singleton or per request).
     */
    readonly lifetime: LifetimeScope;
    /**
     * Gets the name of the dependency if it is a named dependency.
     */
    readonly name: string | undefined;
    /**
     * Creates a new container registration from the specified symbol.
     * @param symbol The symbol used to identify the dependency.
     */
    constructor(symbol: symbol);
    /**
     * Specifies a class or constructor to create when resolving the dependency.
     * @param classType The class or constructor that will be returned when resolving the dependency.
     */
    as(classType: new (...args: any[]) => T): ContainerRegistration<T>;
    /**
     * Registers the dependency to be returned as an instance of itself.
     */
    asSelf(): ContainerRegistration<T>;
    /**
     * Specifies that the dependency should be registered with a name.
     * @param name The name that should be used to identify the dependency.
     */
    named(name: string): ContainerRegistration<T>;
    /**
     * Specifies that the dependency should be resolved using a custom factory function.
     * @param factory The factory function used to create an instance of the dependency when it is resolved.
     */
    usingFactory(factory: (container: IContainer) => T): ContainerRegistration<T>;
    /**
     * Specifies a custom lifetime scope to use for the dependency.
     * @param lifetime The lifetime scope to use.
     */
    withLifetime(lifetime: LifetimeScope): ContainerRegistration<T>;
}
