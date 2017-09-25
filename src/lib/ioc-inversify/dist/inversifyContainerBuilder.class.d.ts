import { ContainerRegistration, IContainer, IContainerBuilder } from '@nge/ioc-core';
export declare class InversifyContainerBuilder implements IContainerBuilder {
    private _registrations;
    register<T>(type: symbol): ContainerRegistration<T>;
    build(): IContainer;
}
