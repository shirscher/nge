import { ILogger } from '../logger.interface';
import { ILoggerFactory } from '../loggerFactory.interface';
/**
 * Logger factory that creates a ConsoleLogger instance.
 */
export declare class ConsoleLoggerFactory implements ILoggerFactory {
    private defaultInstance;
    private namedInstances;
    constructor();
    create(name?: string): ILogger;
}
