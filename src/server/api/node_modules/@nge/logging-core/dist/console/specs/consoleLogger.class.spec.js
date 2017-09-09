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
        it('should call console.log', () => {
            spyOn(console, 'log');
            consoleLogger.log(logLevel_enum_1.LogLevel.Info, 'message');
            expect(console.log).toHaveBeenCalled();
        });
        it('should not log if level is less than minimum level', () => {
            spyOn(console, 'log');
            consoleLogger.minLevel = logLevel_enum_1.LogLevel.Info;
            consoleLogger.log(logLevel_enum_1.LogLevel.Debug, 'message');
            expect(console.log).toHaveBeenCalledTimes(0);
        });
        it('should call console.warn for Warning log level', () => {
            spyOn(console, 'warn');
            consoleLogger.log(logLevel_enum_1.LogLevel.Warning, 'message');
            expect(console.warn).toHaveBeenCalled();
        });
        it('should call console.error for Error log level', () => {
            spyOn(console, 'error');
            consoleLogger.log(logLevel_enum_1.LogLevel.Error, 'message');
            expect(console.error).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=consoleLogger.class.spec.js.map