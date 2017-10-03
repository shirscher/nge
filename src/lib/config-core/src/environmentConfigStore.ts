import { IConfigStore } from './configStore';

/**
 * A configuration value store that supports different values per environment.
 */
export interface IEnvironmentConfigStore extends IConfigStore {
    environment: string;
}
