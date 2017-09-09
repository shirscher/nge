import { IApplication } from './application.interface';
import { IVersion } from './version.interface';

export interface IModule {
    name: string;

    version: IVersion;

    load(application: IApplication): void;
}
