import { ILogger } from '../logger';
import { ILoggerFactory } from '../loggerFactory';
import { NullLogger } from './NullLogger';

export class NullLoggerFactory implements ILoggerFactory {
    private instance: NullLogger;

    constructor() {
        this.instance = new NullLogger();
    }

    public create(): ILogger {
        return this.instance;
    }
}
