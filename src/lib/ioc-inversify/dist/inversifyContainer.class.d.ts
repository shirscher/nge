import { interfaces } from 'inversify';
import { IContainer } from '@nge/ioc-core';
/**
 * Implements an IContainer using the InversifyJS library.
 */
export declare class InversifyContainer implements IContainer {
    private container;
    constructor(container: interfaces.Container);
    resolve<T>(symbol: symbol, name?: string): T;
    resolveAll<T>(symbol: symbol, name?: string): T[];
}
