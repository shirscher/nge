"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("hapi");
class HapiServer {
    constructor(server) {
        this.server = server;
        this.configure = () => {
            // todo:
        };
        this.start = (err) => {
            return {};
        };
        if (!server) {
            this.server = new hapi.Server();
        }
    }
}
exports.HapiServer = HapiServer;
server.route({
    handler: (request, reply) => {
        reply('Hello World!');
    },
    method: 'GET',
    path: '/',
});
server.start((err) => {
    if (err) {
        throw err;
    }
    if (server.info) {
        // console.log('Server running at:', server.info.uri);
    }
});
//# sourceMappingURL=hapiServer.class.js.map