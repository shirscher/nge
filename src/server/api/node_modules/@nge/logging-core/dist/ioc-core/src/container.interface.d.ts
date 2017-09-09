import { IContainerRegistration } from './containerRegistration.interface';
export interface IContainer {
    resolve<T>(symbol: symbol): T;
    resolveAll<T>(symbol: symbol): T[];
    register<T>(type: symbol, constructor: new (...args: any[]) => T, name?: string): IContainerRegistration;
}
