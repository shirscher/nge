"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hapi = require("hapi");
var HapiServer = (function () {
    function HapiServer(server) {
        this.server = server;
        this.initLog = function () {
            return {};
        };
        this.configure = function () {
            // todo:
        };
        this.start = function (err) {
            return {};
        };
        if (!server) {
            this.server = new hapi.Server();
        }
    }
    return HapiServer;
}());
exports.HapiServer = HapiServer;
//# sourceMappingURL=hapi-server.js.map