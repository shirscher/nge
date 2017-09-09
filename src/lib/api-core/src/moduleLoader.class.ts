import * as fs from 'fs';
import * as path from 'path';

import { IApplication } from './application.interface';

export interface IModuleLoadError extends Error {
    innerError?: any;
}

export class ModuleLoader {

    /**
     * Reads all API modules from the specified module folder
     * @param modulePath The root modules folder path.
     * @param application The application that the modules should be loaded into.
     * @param errorCallback If specified then this callback is called whenever an error occurs loading the module. If
     * not specified then the first error encountered will throw an exception and stop loading modules.
     */
    public loadModules(
            modulePath: string, application: IApplication,
            errorCallback?: (err: IModuleLoadError) => void): void {

        let dirItems: string[];
        try {
            dirItems = fs.readdirSync(modulePath);
        } catch (err) {
            this.raiseError(`The module folder ${modulePath} was not found.`,
                            undefined, errorCallback);
            return;
        }

        const moduleFolders: string[] = dirItems.filter((i: string) => {
                    const itemPath: string = path.join(modulePath, i);
                    return fs.statSync(itemPath).isDirectory();
                });

        moduleFolders.forEach((folder: string) => {
            const folderPath: string = path.join(modulePath, folder);

            let nodeModule: any;
            try {
                nodeModule = require(folderPath);
            } catch (err) {
                this.raiseError(`Error occurred while loading module in ${folderPath}`,
                                err, errorCallback);
                return;
            }

            if (!nodeModule.default) {
                this.raiseError(`No default export was defined in the module in ${folderPath}`,
                                undefined, errorCallback);
                return;
            }
            if (!(typeof nodeModule.default === 'function')) {
                this.raiseError(`The default export from the module in ${folderPath} was not a function`,
                                undefined, errorCallback);
                return;
            }

            let mod: any;
            if (nodeModule) {
                try {
                    mod = nodeModule.default();
                } catch (err) {
                    this.raiseError(`Error occurred while loading default export from module folder ${folderPath}`,
                                    err, errorCallback);
                    return;
                }
            }

            if (!mod) {
                const value = mod === undefined ? 'an undefined' :
                                (mod === null ? 'a null' : 'an empty');
                this.raiseError(`Module factory in ${folderPath} returned ${value} value`,
                                undefined, errorCallback);
                return;
            }

            if (!mod.load) {
                this.raiseError(`No load function was found on the exported module in ${folderPath}`,
                                undefined, errorCallback);
                return;
            }
            if (typeof mod.load !== 'function') {
                this.raiseError(`The load property on the export module in ${folderPath} was not a function`,
                                undefined, errorCallback);
                return;
            }

            try {
                mod.load(application);
            } catch (err) {
                this.raiseError(`Error occurred when loading the module in ${folderPath}`,
                                err, errorCallback);
                return;
            }
        });
    }

    private raiseError(message: string,
                       innerError?: Error,
                       errorCallback?: (err: IModuleLoadError) => void) {
        if (errorCallback) {
            errorCallback({
                innerError,
                message,
                name: '',
            });
        } else {
            throw new Error(message);
        }
    }
}
