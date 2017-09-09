"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var ModuleLoader = (function () {
    function ModuleLoader() {
    }
    /**
     * Reads all API modules from the specified module folder
     * @param modulePath The root modules folder path.
     * @param application The application that the moduels should be loaded into.
     * @param errorCallback If specified then this callback is called whenever an error occurs loading the module. If
     * not specified then the first error encountered will throw an exception and stop loading modules.
     */
    ModuleLoader.prototype.loadModules = function (modulePath, application, errorCallback) {
        var moduleFolders = fs.readdirSync(modulePath)
            .filter(function (i) {
            var itemPath = path.format({
                base: i,
                dir: modulePath,
                ext: '',
                name: '',
                root: '',
            });
            return fs.statSync(itemPath).isDirectory();
        });
        moduleFolders.forEach(function (folder) {
            var folderPath = path.format({
                base: folder,
                dir: modulePath,
                ext: '',
                name: '',
                root: '',
            });
            var nodeModule;
            try {
                nodeModule = require(folderPath);
            }
            catch (err) {
                if (errorCallback) {
                    errorCallback({
                        innerError: err,
                        message: "Error occurred while loading module folder " + folderPath,
                        name: '',
                    });
                }
                else {
                    throw err;
                }
            }
            var m;
            if (nodeModule) {
                try {
                    m = nodeModule.default();
                }
                catch (err) {
                    if (errorCallback) {
                        errorCallback({
                            innerError: err,
                            message: "Error occurred while loading default export from module folder " + folderPath,
                            name: '',
                        });
                    }
                    else {
                        throw err;
                    }
                }
            }
            if (m) {
                if (!m.load) {
                    var message = "No load function was found on the exported module in " + folderPath;
                    if (errorCallback) {
                        errorCallback({
                            message: message,
                            name: '',
                        });
                    }
                    else {
                        throw new Error(message);
                    }
                }
                else if (typeof m.load === 'function') {
                    m.load(application);
                }
            }
        });
    };
    return ModuleLoader;
}());
exports.ModuleLoader = ModuleLoader;
//# sourceMappingURL=moduleReader.class.js.map