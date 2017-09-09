import { Container, interfaces } from 'inversify';

import { ContainerRegistration, IContainer, IContainerBuilder } from '@nge/ioc-core';

import { InversifyContainer } from './inversifyContainer.class';
import { InversifyContainerRegistration } from './inversifyContainerRegistration.class';
import { IInversifyContainerRegistration } from './inversifyContainerRegistration.interface';

export class InversifyContainerBuilder implements IContainerBuilder {
    private _registrations: IInversifyContainerRegistration[] = [];
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }

    public register<T>(type: symbol): ContainerRegistration<T> {
        const registration = new InversifyContainerRegistration<T>(type);
        this._registrations.push(registration);
        return registration;
    }

    public build(): IContainer {
        const kernel = new Container();

        for (const registration of this._registrations) {
            registration.addToContainer(kernel);
        }

        return new InversifyContainer(kernel);
    }
}
