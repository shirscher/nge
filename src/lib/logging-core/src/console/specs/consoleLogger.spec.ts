import { LogLevel } from '../../logLevel';
import { ConsoleLogger } from '../consoleLogger';

describe('consoleLogger', () => {
    let consoleLogger: ConsoleLogger;

    beforeEach(() => {
        consoleLogger = new ConsoleLogger();
    });

    describe('log', () => {
        it('should call console.log', () => {
            spyOn(console, 'log');
            consoleLogger.log(LogLevel.Info, 'message');
            expect(console.log).toHaveBeenCalled();
        });

        it('should not log if level is less than minimum level', () => {
            spyOn(console, 'log');
            consoleLogger.minLevel = LogLevel.Info;
            consoleLogger.log(LogLevel.Debug, 'message');
            expect(console.log).toHaveBeenCalledTimes(0);
        });

        it('should call console.warn for Warning log level', () => {
            spyOn(console, 'warn');
            consoleLogger.log(LogLevel.Warning, 'message');
            expect(console.warn).toHaveBeenCalled();
        });

        it('should call console.error for Error log level', () => {
            spyOn(console, 'error');
            consoleLogger.log(LogLevel.Error, 'message');
            expect(console.error).toHaveBeenCalled();
        });
    });

});
