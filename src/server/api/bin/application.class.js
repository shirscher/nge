"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    constructor(server) {
        this.server = server;
    }
    init() {
        this.server.configure();
    }
    start() {
        this.server.start();
    }
}
exports.Application = Application;
//# sourceMappingURL=application.class.js.map