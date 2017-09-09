"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const containerRegistrationResolveMethod_enum_1 = require("./containerRegistrationResolveMethod.enum");
const lifetimeScope_enum_1 = require("./lifetimeScope.enum");
/**
 * Represents a registration in a IContainerBuilder that can be used to configure the dependency.
 */
class ContainerRegistration {
    /**
     * Creates a new container registration from the specified symbol.
     * @param symbol The symbol used to identify the dependency.
     */
    constructor(symbol) {
        this._symbol = symbol;
        this._method = containerRegistrationResolveMethod_enum_1.ContainerRegistrationResolveMethod.Self;
        this._lifetime = lifetimeScope_enum_1.LifetimeScope.Instance;
    }
    /**
     * Gets the symbol used to look up the dependency.
     */
    get symbol() {
        return this._symbol;
    }
    /**
     * Gets the method used to resolve the dependency (e.g. using a factory method).
     */
    get method() {
        return this._method;
    }
    /**
     * If the resolve method is ContainerRegistrationResolveMethod.Factory, gets the factory function that will be used
     * to create the instance.
     */
    get factory() {
        return this._factory;
    }
    /**
     * If the resolve method is ContainerRegistrationResolveMethod.Class, gets the class type (or constructor method)
     * that will be created when the dependency is resolved.
     */
    get classType() {
        return this._classType;
    }
    /**
     * Gets the lifetime scope of the dependency (e.g. singleton or per request).
     */
    get lifetime() {
        return this._lifetime;
    }
    /**
     * Gets the name of the dependency if it is a named dependency.
     */
    get name() {
        return this._name;
    }
    /**
     * Specifies a class or constructor to create when resolving the dependency.
     * @param classType The class or constructor that will be returned when resolving the dependency.
     */
    as(classType) {
        this._classType = classType;
        this._method = containerRegistrationResolveMethod_enum_1.ContainerRegistrationResolveMethod.Class;
        return this;
    }
    /**
     * Registers the dependency to be returned as an instance of itself.
     */
    asSelf() {
        this._method = containerRegistrationResolveMethod_enum_1.ContainerRegistrationResolveMethod.Self;
        return this;
    }
    /**
     * Specifies that the dependency should be registered with a name.
     * @param name The name that should be used to identify the dependency.
     */
    named(name) {
        this._name = name;
        return this;
    }
    /**
     * Specifies that the dependency should be resolved using a custom factory function.
     * @param factory The factory function used to create an instance of the dependency when it is resolved.
     */
    usingFactory(factory) {
        this._factory = factory;
        this._method = containerRegistrationResolveMethod_enum_1.ContainerRegistrationResolveMethod.Factory;
        return this;
    }
    /**
     * Specifies a custom lifetime scope to use for the dependency.
     * @param lifetime The lifetime scope to use.
     */
    withLifetime(lifetime) {
        this._lifetime = lifetime;
        return this;
    }
}
exports.ContainerRegistration = ContainerRegistration;
//# sourceMappingURL=containerRegistration.class.js.map