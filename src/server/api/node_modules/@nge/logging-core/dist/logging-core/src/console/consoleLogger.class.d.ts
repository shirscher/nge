import { ILogger } from '../logger.interface';
import { LogLevel } from '../logLevel.enum';
/**
 * A logger implementation that writes to the console.
 */
export declare class ConsoleLogger implements ILogger {
    name: string | undefined;
    minLevel: LogLevel;
    constructor(name?: string | undefined, minLevel?: LogLevel);
    log(level: LogLevel, message: any, ...params: any[]): void;
    isEnabled(logLevel: LogLevel): boolean;
    trace(message: any, params: any[]): void;
    debug(message: any, params: any[]): void;
    info(message: any, params: any[]): void;
    warn(message: any, params: any[]): void;
    error(message: any, params: any[]): void;
    fatal(message: any, params: any[]): void;
}
