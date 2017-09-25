import { ILogger } from '../logger';
import { LogLevel } from '../logLevel';

/**
 * A logger implementation that writes entries to an in memory array.
 */
export class MemoryLogger implements ILogger {
    private entries: any[];

    constructor(private name?: string, private minLevel: LogLevel = LogLevel.Info) {
        this.entries = [];
    }

    public log(level: LogLevel, message: any, ...params: any[]): void {
        if (level < this.minLevel) {
            return;
        }

        this.entries.push({
            level,
            message,
            name: this.name,
            timestamp: new Date(),
            ...params,
        });
    }

    public isEnabled(logLevel: LogLevel): boolean {
        return logLevel >= this.minLevel;
    }

    public clear() {
        this.entries = [];
    }

    public trace(message: any, ...params: any[]): void {
        this.log(LogLevel.Trace, message, params);
    }

    public debug(message: any, ...params: any[]): void {
        this.log(LogLevel.Debug, message, params);
    }

    public info(message: any, ...params: any[]): void {
        this.log(LogLevel.Info, message, params);
    }

    public warn(message: any, ...params: any[]): void {
        this.log(LogLevel.Warning, message, params);
    }

    public error(message: any, ...params: any[]): void {
        this.log(LogLevel.Error, message, params);
    }

    public fatal(message: any, ...params: any[]): void {
        this.log(LogLevel.Fatal, message, params);
    }
}
