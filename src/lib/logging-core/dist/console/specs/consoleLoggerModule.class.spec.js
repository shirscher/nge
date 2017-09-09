"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const ioc_inversify_1 = require("@nge/ioc-inversify");
const types_1 = require("../../types");
const consoleLogger_class_1 = require("../consoleLogger.class");
const consoleLoggerFactory_class_1 = require("../consoleLoggerFactory.class");
const consoleLoggerModule_class_1 = require("../consoleLoggerModule.class");
describe('ConsoleLoggerModule', () => {
    let mod;
    let containerBuilder;
    beforeEach(() => {
        containerBuilder = new ioc_inversify_1.InversifyContainerBuilder(new inversify_1.Container());
        mod = new consoleLoggerModule_class_1.ConsoleLoggerModule();
    });
    describe('initialize', () => {
        it('should register the ILoggerFactory interface as the ConsoleLoggerFactory implementation', () => {
            mod.initialize(containerBuilder);
            const container = containerBuilder.build();
            const loggerFactory = container.resolve(types_1.Types.ILoggerFactory);
            expect(loggerFactory).toBeDefined();
            expect(loggerFactory instanceof consoleLoggerFactory_class_1.ConsoleLoggerFactory).toBeTruthy();
        });
        it('should register the ILogger interface as the ConsoleLogger implementation', () => {
            mod.initialize(containerBuilder);
            const container = containerBuilder.build();
            const logger = container.resolve(types_1.Types.ILogger);
            expect(logger).toBeDefined();
            expect(logger instanceof consoleLogger_class_1.ConsoleLogger).toBeTruthy();
        });
    });
});
//# sourceMappingURL=consoleLoggerModule.class.spec.js.map