"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lifetimeScope_enum_1 = require("@nge/ioc-core/dist/lifetimeScope.enum");
const ioc_core_1 = require("@nge/ioc-core");
const inversifyContainer_class_1 = require("./inversifyContainer.class");
class InversifyContainerRegistration extends ioc_core_1.ContainerRegistration {
    constructor(type) {
        super(type);
    }
    addToContainer(container) {
        let binding;
        switch (this.method) {
            case ioc_core_1.ContainerRegistrationResolveMethod.Class:
                binding = container.bind(this.symbol).to(this.classType);
                break;
            case ioc_core_1.ContainerRegistrationResolveMethod.Factory:
                binding = container.bind(this.symbol).toDynamicValue((c) => {
                    const containerContext = new inversifyContainer_class_1.InversifyContainer(c.container);
                    return this.factory(containerContext);
                });
                break;
            case ioc_core_1.ContainerRegistrationResolveMethod.Self:
                binding = container.bind(this.symbol).toSelf();
                break;
            default:
                throw new Error(`Unknown ContainerRegistrationResolveMethod value: ${this.method}`);
        }
        if (this.name) {
            binding.whenTargetNamed(this.name);
        }
        if (this.lifetime === lifetimeScope_enum_1.LifetimeScope.Singleton) {
            binding.inSingletonScope();
        }
    }
}
exports.InversifyContainerRegistration = InversifyContainerRegistration;
//# sourceMappingURL=inversifyContainerRegistration.class.js.map