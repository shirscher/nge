"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ioc_core_1 = require("@nge/ioc-core");
/**
 * Implements an IContainer using the InversifyJS library.
 */
class InversifyContainer {
    constructor(container) {
        this.container = container;
    }
    resolve(symbol, name) {
        return name ?
            this.container.getNamed(symbol, name) :
            this.container.get(symbol);
    }
    resolveAll(symbol, name) {
        // Not sure why getAllNamed is on Container but not interfaces.Container
        return name ?
            this.container.getAllNamed(symbol, name) :
            this.container.getAll(symbol);
    }
}
exports.InversifyContainer = InversifyContainer;
ioc_core_1.configureDecorators(inversify_1.injectable, inversify_1.inject);
//# sourceMappingURL=inversifyContainer.class.js.map