import { IContainer } from './container';
import { ContainerRegistrationResolveMethod } from './containerRegistrationResolveMethod';
import { LifetimeScope } from './lifetimeScope';
import { INewable } from './newable';

/**
 * Represents a registration in a IContainerBuilder that can be used to configure the dependency.
 */
export class ContainerRegistration<T> {
    protected _symbol: symbol | INewable<T>;
    protected _method: ContainerRegistrationResolveMethod;
    protected _factory: (container: IContainer) => T;
    protected _classType: new (...args: any[]) => T;
    protected _lifetime: LifetimeScope;
    protected _name?: string;

    /**
     * Gets the symbol used to look up the dependency.
     */
    public get symbol(): symbol | INewable<T> {
        return this._symbol;
    }

    /**
     * Gets the method used to resolve the dependency (e.g. using a factory method).
     */
    public get method(): ContainerRegistrationResolveMethod {
        return this._method;
    }

    /**
     * If the resolve method is ContainerRegistrationResolveMethod.Factory, gets the factory function that will be used
     * to create the instance.
     */
    public get factory(): (container: IContainer) => T {
        return this._factory;
    }

    /**
     * If the resolve method is ContainerRegistrationResolveMethod.Class, gets the class type (or constructor method)
     * that will be created when the dependency is resolved.
     */
    public get classType(): new (...args: any[]) => T {
        return this._classType;
    }

    /**
     * Gets the lifetime scope of the dependency (e.g. singleton or per request).
     */
    public get lifetime(): LifetimeScope {
        return this._lifetime;
    }

    /**
     * Gets the name of the dependency if it is a named dependency.
     */
    public get name(): string | undefined {
        return this._name;
    }

    /**
     * Creates a new container registration from the specified symbol.
     * @param symbol The symbol used to identify the dependency.
     */
    constructor(symbol: symbol | INewable<T>) {
        this._symbol = symbol;
        this._method = ContainerRegistrationResolveMethod.Self;
        this._lifetime = LifetimeScope.Instance;
    }

    /**
     * Specifies a class or constructor to create when resolving the dependency.
     * @param classType The class or constructor that will be returned when resolving the dependency.
     */
    public as(classType: new (...args: any[]) => T): ContainerRegistration<T> {
        this._classType = classType;
        this._method = ContainerRegistrationResolveMethod.Class;
        return this;
    }

    /**
     * Registers the dependency to be returned as an instance of itself.
     */
    public asSelf(): ContainerRegistration<T> {
        this._method = ContainerRegistrationResolveMethod.Self;
        return this;
    }

    /**
     * Specifies that the dependency should be registered with a name.
     * @param name The name that should be used to identify the dependency.
     */
    public named(name: string): ContainerRegistration<T> {
        this._name = name;
        return this;
    }

    /**
     * Specifies that the dependency should be resolved using a custom factory function.
     * @param factory The factory function used to create an instance of the dependency when it is resolved.
     */
    public usingFactory(factory: (container: IContainer) => T): ContainerRegistration<T> {
        this._factory = factory;
        this._method = ContainerRegistrationResolveMethod.Factory;
        return this;
    }

    /**
     * Specifies a custom lifetime scope to use for the dependency.
     * @param lifetime The lifetime scope to use.
     */
    public withLifetime(lifetime: LifetimeScope): ContainerRegistration<T> {
        this._lifetime = lifetime;
        return this;
    }
}
