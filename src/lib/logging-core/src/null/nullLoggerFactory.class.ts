import { ILogger } from '../logger.interface';
import { ILoggerFactory } from '../loggerFactory.interface';
import { NullLogger } from './NullLogger.class';

export class NullLoggerFactory implements ILoggerFactory {
    private instance: NullLogger;

    constructor() {
        this.instance = new NullLogger();
    }

    public create(): ILogger {
        return this.instance;
    }
}
