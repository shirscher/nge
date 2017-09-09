import { ILogger } from '../logger.interface';

/**
 * A logger implementation that writes entries to /dev/null.
 */
export class NullLogger implements ILogger {
    public log(): void {
        // NOOP
    }

    public isEnabled(): boolean {
        return false;
    }

    public trace(): void {
        // NOOP
    }

    public debug(): void {
        // NOOP
    }

    public info(): void {
        // NOOP
    }

    public warn(): void {
        // NOOP
    }

    public error(): void {
        // NOOP
    }

    public fatal(): void {
        // NOOP
    }
}
