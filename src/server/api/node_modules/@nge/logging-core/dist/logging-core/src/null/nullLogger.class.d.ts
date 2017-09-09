import { ILogger } from '../logger.interface';
/**
 * A logger implementation that writes entries to /dev/null.
 */
export declare class NullLogger implements ILogger {
    log(): void;
    isEnabled(): boolean;
    trace(): void;
    debug(): void;
    info(): void;
    warn(): void;
    error(): void;
    fatal(): void;
}
