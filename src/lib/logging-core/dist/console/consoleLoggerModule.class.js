"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_core_1 = require("@nge/ioc-core");
const types_1 = require("../types");
const consoleLoggerFactory_class_1 = require("./consoleLoggerFactory.class");
/**
 * Module that registers the console logger as the default logging implementation.
 */
class ConsoleLoggerModule {
    constructor(name) {
        this.name = name;
    }
    initialize(builder) {
        const factoryReg = builder.register(types_1.Types.ILoggerFactory)
            .as(consoleLoggerFactory_class_1.ConsoleLoggerFactory)
            .withLifetime(ioc_core_1.LifetimeScope.Singleton);
        if (this.name) {
            factoryReg.named(this.name);
        }
        const loggerReg = builder.register(types_1.Types.ILogger)
            .usingFactory((c) => c.resolve(types_1.Types.ILoggerFactory).create())
            .withLifetime(ioc_core_1.LifetimeScope.Singleton);
        if (this.name) {
            loggerReg.named(this.name);
        }
    }
}
exports.ConsoleLoggerModule = ConsoleLoggerModule;
//# sourceMappingURL=consoleLoggerModule.class.js.map