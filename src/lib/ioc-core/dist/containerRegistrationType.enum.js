"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines how a service is registered in a dependency injection container.
 */
var ContainerRegistrationType;
(function (ContainerRegistrationType) {
    /**
     * A concrete implementation is registered as itself.
     */
    ContainerRegistrationType[ContainerRegistrationType["Self"] = 0] = "Self";
    /**
     * A class or interface is registered as another concrete implementation.
     */
    ContainerRegistrationType[ContainerRegistrationType["Class"] = 1] = "Class";
    /**
     * A class or interface is registered using a factory function that will build the concrete implementation.
     */
    ContainerRegistrationType[ContainerRegistrationType["Factory"] = 2] = "Factory";
})(ContainerRegistrationType = exports.ContainerRegistrationType || (exports.ContainerRegistrationType = {}));
//# sourceMappingURL=containerRegistrationType.enum.js.map