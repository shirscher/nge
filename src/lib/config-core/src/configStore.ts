/**
 * Base interface for configuration key/value pair storage.
 */
export interface IConfigStore {
    getValue<T>(key: string, defaultValue?: T): Promise<T>;

    setValue(key: string, value: any): Promise<void>;

    hasValue(key: string): Promise<boolean>;
}
