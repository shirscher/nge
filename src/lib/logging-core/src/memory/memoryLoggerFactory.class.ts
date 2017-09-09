import { ILogger } from '../logger.interface';
import { ILoggerFactory } from '../loggerFactory.interface';
import { MemoryLogger } from './MemoryLogger.class';

export class MemoryLoggerFactory implements ILoggerFactory {
    private defaultInstance: MemoryLogger;
    private namedInstances: { [ key: string]: MemoryLogger } = {};

    constructor() {
        this.defaultInstance = new MemoryLogger();
    }

    public create(name?: string): ILogger {
        if (name) {
            if (!this.namedInstances[name]) {
                this.namedInstances[name] = new MemoryLogger(name);
            }
            return this.namedInstances[name];
        }

        return this.defaultInstance;
    }
}
