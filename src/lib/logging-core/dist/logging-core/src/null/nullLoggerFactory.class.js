"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NullLogger_class_1 = require("./NullLogger.class");
class NullLoggerFactory {
    constructor() {
        this.instance = new NullLogger_class_1.NullLogger();
    }
    create() {
        return this.instance;
    }
}
exports.NullLoggerFactory = NullLoggerFactory;
//# sourceMappingURL=nullLoggerFactory.class.js.map