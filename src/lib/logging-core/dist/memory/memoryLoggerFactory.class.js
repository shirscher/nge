"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryLogger_class_1 = require("./MemoryLogger.class");
class MemoryLoggerFactory {
    constructor() {
        this.namedInstances = {};
        this.defaultInstance = new MemoryLogger_class_1.MemoryLogger();
    }
    create(name) {
        if (name) {
            if (!this.namedInstances[name]) {
                this.namedInstances[name] = new MemoryLogger_class_1.MemoryLogger(name);
            }
            return this.namedInstances[name];
        }
        return this.defaultInstance;
    }
}
exports.MemoryLoggerFactory = MemoryLoggerFactory;
//# sourceMappingURL=memoryLoggerFactory.class.js.map