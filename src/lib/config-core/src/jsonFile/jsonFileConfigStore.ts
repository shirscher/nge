import { util } from '@nge/core';
import * as fsp from 'fs-promisified';
import { IConfigStore } from '../configStore';

/**
 * A simple configuration store that reads settings from a text file with JSON data.
 */
export class JsonFileConfigStore implements IConfigStore {
    private data?: any;
    private filePath?: string;

    public constructor(filePath?: string) {
        this.filePath = filePath;
    }

    public getValue<T>(key: string, defaultValue?: T): Promise<T> {
        return this.loadData()
            .then(() => {
                const value = util.deepTest(this.data, key);
                if (value === undefined) {
                    return defaultValue;
                }
                return value;
            });
    }

    public setValue(key: string, value: any): Promise<void> {
        return this.loadData()
            .then(() => {
                util.deepSet(this.data, key, value);
            }).then(() => {
                return this.saveData();
            });
    }

    public hasValue(key: string): Promise<boolean> {
        return this.loadData()
            .then(() => {
                return util.deepTest(this.data, key) !== undefined;
            });
    }

    private async loadData(): Promise<void> {
        if (!this.data && this.filePath) {
            const data = await fsp.readFile(this.filePath, 'utf8');
            this.data = JSON.parse(data);
        }
    }

    private async saveData(): Promise<void> {
        if (this.data && this.filePath) {
            return fsp.writeFile(this.filePath, JSON.stringify(this.data));
        }
    }
}
