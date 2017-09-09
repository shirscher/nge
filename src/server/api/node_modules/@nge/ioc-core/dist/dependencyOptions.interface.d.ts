import { IContainer } from './container.interface';
import { LifetimeScope } from './lifetimeScope.enum';
export interface IDependencyOptions {
    name: string;
    params: {
        [key: string]: (resolver: IContainer) => any;
    };
    lifetime: LifetimeScope;
}
