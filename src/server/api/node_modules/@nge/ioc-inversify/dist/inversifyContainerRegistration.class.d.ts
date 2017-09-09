import { interfaces } from 'inversify';
import { ContainerRegistration } from '@nge/ioc-core';
import { IInversifyContainerRegistration } from './inversifyContainerRegistration.interface';
export declare class InversifyContainerRegistration<T> extends ContainerRegistration<T> implements IInversifyContainerRegistration {
    constructor(type: symbol);
    addToContainer(container: interfaces.Container): void;
}
