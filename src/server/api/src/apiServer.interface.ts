import { IDependencyConfig } from './dependencyConfig.interface';
import { IDependencyResolver } from './dependencyResolver.interface';
import { IEnvironment } from './environment.interface';
import { ILoggerFactory } from './loggerFactory.interface';

export interface IApiServer {
    modules: any[];

    configure: (environment: IEnvironment,
                resolver: IDependencyResolver,
                loggerFactory: ILoggerFactory) => void;

    start: (err: Error) => any;
}

export interface IApiModule {
    routes: IRoute[];
}

export interface IRoute {

}