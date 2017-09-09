import { interfaces } from 'inversify';
import { ContainerRegistration, IContainer, IContainerBuilder } from '@nge/ioc-core';
export declare class InversifyContainerBuilder implements IContainerBuilder {
    private _registrations;
    private _container;
    constructor(container: interfaces.Container);
    register<T>(type: symbol): ContainerRegistration<T>;
    build(): IContainer;
}
