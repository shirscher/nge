"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logLevel_enum_1 = require("../../logLevel.enum");
const consoleLogger_class_1 = require("../consoleLogger.class");
describe('consoleLogger', () => {
    let consoleLogger;
    beforeEach(() => {
        consoleLogger = new consoleLogger_class_1.ConsoleLogger();
    });
    describe('log', () => {
        it('should not log if level', () => {
            consoleLogger.log(logLevel_enum_1.LogLevel.Info, 'message');
            expect(console.count).toBeFalsy();
        });
    });
});
//# sourceMappingURL=consoleLoggerFactory.class.spec.js.map