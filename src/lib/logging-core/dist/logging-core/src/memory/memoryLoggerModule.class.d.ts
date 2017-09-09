import { IContainerBuilder, IDependencyModule } from '@nge/ioc-core';
export declare class MemoryLoggerModule implements IDependencyModule {
    private name;
    constructor(name?: string | undefined);
    initialize(builder: IContainerBuilder): void;
}
