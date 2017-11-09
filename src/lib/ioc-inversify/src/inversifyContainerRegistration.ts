import { INewable, LifetimeScope } from '@nge/ioc-core';
import { interfaces } from 'inversify';

import { ContainerRegistration, ContainerRegistrationResolveMethod } from '@nge/ioc-core';
import { InversifyContainer } from './inversifyContainer';

export interface IInversifyContainerRegistration {
    addToContainer(container: interfaces.Container): void;
}

export class InversifyContainerRegistration<T> extends ContainerRegistration<T>
        implements IInversifyContainerRegistration {
    constructor(type: symbol | INewable<T>) {
        super(type);
    }

    public addToContainer(container: interfaces.Container): void {
        let binding: interfaces.BindingInWhenOnSyntax<T>;

        switch (this.method) {
            case ContainerRegistrationResolveMethod.Class:
                binding = container.bind<T>(this.symbol).to(this.classType);
                break;
            case ContainerRegistrationResolveMethod.Factory:
                binding = container.bind<T>(this.symbol).toDynamicValue(
                    (c: interfaces.Context) => {
                        const containerContext = new InversifyContainer(c.container);
                        return this.factory(containerContext);
                    });
                break;
            case ContainerRegistrationResolveMethod.Self:
                binding = container.bind<T>(this.symbol).toSelf();
                break;
            default:
                throw new Error(`Unknown ContainerRegistrationResolveMethod value: ${this.method}`);
        }

        if (this.name) {
            binding.whenTargetNamed(this.name);
        }
        if (this.lifetime === LifetimeScope.Singleton) {
            binding.inSingletonScope();
        }
    }
}
