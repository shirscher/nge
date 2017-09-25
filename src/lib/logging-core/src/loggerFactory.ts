import { ILogger } from './logger';

/**
 * Creates logger instances
 */
export interface ILoggerFactory {
    create(name?: string): ILogger;
}
