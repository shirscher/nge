import { Injectable } from '@nge/ioc-core';

import { ILogger } from '../logger';
import { ILoggerFactory } from '../loggerFactory';
import { ConsoleLogger } from './consoleLogger';

/**
 * Logger factory that creates a ConsoleLogger instance.
 */
@Injectable()
export class ConsoleLoggerFactory implements ILoggerFactory {
    private defaultInstance: ConsoleLogger;
    private namedInstances: { [ key: string]: ConsoleLogger } = {};

    constructor() {
        this.defaultInstance = new ConsoleLogger();
    }

    public create(name?: string): ILogger {
        if (name) {
            if (!this.namedInstances[name]) {
                this.namedInstances[name] = new ConsoleLogger(name);
            }
            return this.namedInstances[name];
        }

        return this.defaultInstance;
    }
}
