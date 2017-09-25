import { Injectable } from '@nge/ioc-core';

import { ILogger } from '../logger';
import { LogLevel } from '../logLevel';

/**
 * A logger implementation that writes to the console.
 */
@Injectable()
export class ConsoleLogger implements ILogger {
    constructor(public name?: string, public minLevel: LogLevel = LogLevel.Info) {
    }

    public log(level: LogLevel, message: any, ...params: any[]): void {
        if (!this.isEnabled(level)) {
            return;
        }

        if (level === LogLevel.Error || level === LogLevel.Fatal) {
            if (params && params.length > 0) {
                // tslint:disable-next-line:no-console
                console.error(message, this.name, level.name, ...params);
            } else {
                // tslint:disable-next-line:no-console
                console.error(message, this.name, level.name);
            }
        } else if (level === LogLevel.Warning) {
            if (params && params.length > 0) {
                // tslint:disable-next-line:no-console
                console.warn(message, this.name, level.name, ...params);
            } else {
                // tslint:disable-next-line:no-console
                console.warn(message, this.name, level.name);
            }
        } else {
            if (params && params.length > 0) {
                // tslint:disable-next-line:no-console
                console.log(message, this.name, level.name, ...params);
            } else {
                // tslint:disable-next-line:no-console
                console.log(message, this.name, level.name);
            }
        }
    }

    public isEnabled(logLevel: LogLevel): boolean {
        return logLevel.level >= this.minLevel.level;
    }

    public trace(message: any, params: any[]): void {
        this.log(LogLevel.Trace, message, params);
    }

    public debug(message: any, params: any[]): void {
        this.log(LogLevel.Debug, message, params);
    }

    public info(message: any, params: any[]): void {
        this.log(LogLevel.Info, message, params);
    }

    public warn(message: any, params: any[]): void {
        this.log(LogLevel.Warning, message, params);
    }

    public error(message: any, params: any[]): void {
        this.log(LogLevel.Error, message, params);
    }

    public fatal(message: any, params: any[]): void {
        this.log(LogLevel.Fatal, message, params);
    }
}
