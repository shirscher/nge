"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines how a service is resolved in a dependency injection container.
 */
var ContainerRegistrationResolveMethod;
(function (ContainerRegistrationResolveMethod) {
    /**
     * A concrete implementation is registered as itself.
     */
    ContainerRegistrationResolveMethod[ContainerRegistrationResolveMethod["Self"] = 0] = "Self";
    /**
     * A class or interface is registered as another concrete implementation.
     */
    ContainerRegistrationResolveMethod[ContainerRegistrationResolveMethod["Class"] = 1] = "Class";
    /**
     * A class or interface is registered using a factory function that will build the concrete implementation.
     */
    ContainerRegistrationResolveMethod[ContainerRegistrationResolveMethod["Factory"] = 2] = "Factory";
})(ContainerRegistrationResolveMethod = exports.ContainerRegistrationResolveMethod || (exports.ContainerRegistrationResolveMethod = {}));
//# sourceMappingURL=containerRegistrationResolveMethod.enum.js.map