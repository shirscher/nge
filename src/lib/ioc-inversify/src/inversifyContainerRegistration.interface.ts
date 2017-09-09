import { interfaces } from 'inversify';

export interface IInversifyContainerRegistration {
    addToContainer(container: interfaces.Container): void;
}
