"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const inversifyContainer_class_1 = require("./inversifyContainer.class");
const inversifyContainerRegistration_class_1 = require("./inversifyContainerRegistration.class");
class InversifyContainerBuilder {
    constructor() {
        this._registrations = [];
    }
    register(type) {
        const registration = new inversifyContainerRegistration_class_1.InversifyContainerRegistration(type);
        this._registrations.push(registration);
        return registration;
    }
    build() {
        const kernel = new inversify_1.Container();
        for (const registration of this._registrations) {
            registration.addToContainer(kernel);
        }
        return new inversifyContainer_class_1.InversifyContainer(kernel);
    }
}
exports.InversifyContainerBuilder = InversifyContainerBuilder;
//# sourceMappingURL=inversifyContainerBuilder.class.js.map