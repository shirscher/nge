import { ILogger } from './logger.interface';

/**
 * Creates logger instances
 */
export interface ILoggerFactory {
    create(name?: string): ILogger;
}
