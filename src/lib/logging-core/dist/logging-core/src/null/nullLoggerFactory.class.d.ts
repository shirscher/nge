import { ILogger } from '../logger.interface';
import { ILoggerFactory } from '../loggerFactory.interface';
export declare class NullLoggerFactory implements ILoggerFactory {
    private instance;
    constructor();
    create(): ILogger;
}
