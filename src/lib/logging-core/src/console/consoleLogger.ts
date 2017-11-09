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

        const p: any[] = [];
        if (this.name) {
            p.push(this.name);
        }
        if (params) {
            p.push(params);
        }

        if (level === LogLevel.Error || level === LogLevel.Fatal) {
            // tslint:disable-next-line:no-console
            console.error(message, level.name, ...p);
        } else if (level === LogLevel.Warning) {
            // tslint:disable-next-line:no-console
            console.warn(message, level.name, ...p);
        } else {
            // tslint:disable-next-line:no-console
            console.log(message, level.name, ...p);
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
