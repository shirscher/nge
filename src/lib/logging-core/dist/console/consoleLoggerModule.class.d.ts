import { IContainerBuilder, IDependencyModule } from '@nge/ioc-core';
/**
 * Module that registers the console logger as the default logging implementation.
 */
export declare class ConsoleLoggerModule implements IDependencyModule {
    private name;
    constructor(name?: string | undefined);
    initialize(builder: IContainerBuilder): void;
}
