import { IContainer } from './container.interface';
export interface IDependencyModule {
    /**
     * Initializes the module by adding all necessary dependencies to the DI container.
     */
    initialize(builder: IContainer): void;
}
