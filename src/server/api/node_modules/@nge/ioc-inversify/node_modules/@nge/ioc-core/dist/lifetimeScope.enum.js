"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies how long a dependency instance should be maintained by the container.
 */
var LifetimeScope;
(function (LifetimeScope) {
    /**
     * Every call to resolve should return a new instance.
     */
    LifetimeScope[LifetimeScope["Instance"] = 0] = "Instance";
    /**
     * Only one instance of the dependency will be created.
     */
    LifetimeScope[LifetimeScope["Singleton"] = 1] = "Singleton";
    // TODO: Implement "Context" lifetime that resolves for each nested container. Requires container nesting.
})(LifetimeScope = exports.LifetimeScope || (exports.LifetimeScope = {}));
//# sourceMappingURL=lifetimeScope.enum.js.map