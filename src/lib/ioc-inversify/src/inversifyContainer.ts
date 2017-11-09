import { Container, inject, injectable, interfaces } from 'inversify';

import { IContainer, INewable } from '@nge/ioc-core';
import { configureDecorators } from '@nge/ioc-core';

/**
 * Implements an IContainer using the InversifyJS library.
 */
export class InversifyContainer implements IContainer {
    constructor(private container: interfaces.Container) {
    }

    public resolve<T>(symbol: symbol | INewable<T>, name?: string): T {
        return name ?
            this.container.getNamed<T>(symbol, name) :
            this.container.get<T>(symbol);
    }

    public resolveAll<T>(symbol: symbol, name?: string): T[] {
        // Not sure why getAllNamed is on Container but not interfaces.Container
        return name ?
            (this.container as Container).getAllNamed<T>(symbol, name) :
            this.container.getAll<T>(symbol);
    }
}

configureDecorators(injectable, inject);
