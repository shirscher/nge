import { LogLevel } from './logLevel.enum';
/**
 * Common interface for logger implementations.
 */
export interface ILogger {
    log(level?: LogLevel, message?: any, ...params: any[]): void;
    isEnabled(logLevel: LogLevel): boolean;
    trace(message?: any, ...params: any[]): void;
    debug(message?: any, ...params: any[]): void;
    info(message?: any, ...params: any[]): void;
    warn(message?: any, ...params: any[]): void;
    error(message?: any, ...params: any[]): void;
    fatal(message?: any, ...params: any[]): void;
}
