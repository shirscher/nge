import { IApiModule, IApiServer } from '@nge/api-core';
import { IContainer, IContainerBuilder } from '@nge/ioc-core';

export class HapiModule implements IApiModule {
    public initialize(_containerBuilder: IContainerBuilder): void {
        throw new Error('Method not implemented.');
    }

    public register(_server: IApiServer, _container: IContainer): void {
        throw new Error('Method not implemented.');
    }
}
