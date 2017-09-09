"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class ModuleLoader {
    /**
     * Reads all API modules from the specified module folder
     * @param modulePath The root modules folder path.
     * @param application The application that the modules should be loaded into.
     * @param errorCallback If specified then this callback is called whenever an error occurs loading the module. If
     * not specified then the first error encountered will throw an exception and stop loading modules.
     */
    loadModules(modulePath, application, errorCallback) {
        let dirItems;
        try {
            dirItems = fs.readdirSync(modulePath);
        }
        catch (err) {
            this.raiseError(`The module folder ${modulePath} was not found.`, undefined, errorCallback);
            return;
        }
        const moduleFolders = dirItems.filter((i) => {
            const itemPath = path.join(modulePath, i);
            return fs.statSync(itemPath).isDirectory();
        });
        moduleFolders.forEach((folder) => {
            const folderPath = path.join(modulePath, folder);
            let nodeModule;
            try {
                nodeModule = require(folderPath);
            }
            catch (err) {
                this.raiseError(`Error occurred while loading module in ${folderPath}`, err, errorCallback);
                return;
            }
            if (!nodeModule.default) {
                this.raiseError(`No default export was defined in the module in ${folderPath}`, undefined, errorCallback);
                return;
            }
            if (!(typeof nodeModule.default === 'function')) {
                this.raiseError(`The default export from the module in ${folderPath} was not a function`, undefined, errorCallback);
                return;
            }
            let mod;
            if (nodeModule) {
                try {
                    mod = nodeModule.default();
                }
                catch (err) {
                    this.raiseError(`Error occurred while loading default export from module folder ${folderPath}`, err, errorCallback);
                    return;
                }
            }
            if (!mod) {
                const value = mod === undefined ? 'an undefined' :
                    (mod === null ? 'a null' : 'an empty');
                this.raiseError(`Module factory in ${folderPath} returned ${value} value`, undefined, errorCallback);
                return;
            }
            if (!mod.load) {
                this.raiseError(`No load function was found on the exported module in ${folderPath}`, undefined, errorCallback);
                return;
            }
            if (typeof mod.load !== 'function') {
                this.raiseError(`The load property on the export module in ${folderPath} was not a function`, undefined, errorCallback);
                return;
            }
            try {
                mod.load(application);
            }
            catch (err) {
                this.raiseError(`Error occurred when loading the module in ${folderPath}`, err, errorCallback);
                return;
            }
        });
    }
    raiseError(message, innerError, errorCallback) {
        if (errorCallback) {
            errorCallback({
                innerError,
                message,
                name: '',
            });
        }
        else {
            throw new Error(message);
        }
    }
}
exports.ModuleLoader = ModuleLoader;
//# sourceMappingURL=moduleLoader.class.js.map