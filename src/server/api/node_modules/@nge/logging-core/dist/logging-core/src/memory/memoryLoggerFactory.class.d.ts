import { ILogger } from '../logger.interface';
import { ILoggerFactory } from '../loggerFactory.interface';
export declare class MemoryLoggerFactory implements ILoggerFactory {
    private defaultInstance;
    private namedInstances;
    constructor();
    create(name?: string): ILogger;
}
