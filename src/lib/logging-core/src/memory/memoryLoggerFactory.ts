import { ILogger } from '../logger';
import { ILoggerFactory } from '../loggerFactory';
import { MemoryLogger } from './MemoryLogger';

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
