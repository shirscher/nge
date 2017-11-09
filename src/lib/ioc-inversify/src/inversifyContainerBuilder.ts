import { Container } from 'inversify';

import { ContainerRegistration, IContainer, IContainerBuilder, INewable } from '@nge/ioc-core';

import { InversifyContainer } from './inversifyContainer';
import { InversifyContainerRegistration } from './inversifyContainerRegistration';
import { IInversifyContainerRegistration } from './inversifyContainerRegistration';

export class InversifyContainerBuilder implements IContainerBuilder {
    private _registrations: IInversifyContainerRegistration[] = [];

    public register<T>(type: symbol | INewable<T>): ContainerRegistration<T> {
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
