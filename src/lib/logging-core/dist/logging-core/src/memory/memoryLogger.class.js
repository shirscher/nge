"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logLevel_enum_1 = require("../logLevel.enum");
/**
 * A logger implementation that writes entries to an in memory array.
 */
class MemoryLogger {
    constructor(name, minLevel = logLevel_enum_1.LogLevel.Info) {
        this.name = name;
        this.minLevel = minLevel;
        this.entries = [];
    }
    log(level, message, ...params) {
        if (level < this.minLevel) {
            return;
        }
        this.entries.push(Object.assign({ level,
            message, name: this.name, timestamp: new Date() }, params));
    }
    isEnabled(logLevel) {
        return logLevel >= this.minLevel;
    }
    clear() {
        this.entries = [];
    }
    trace(message, ...params) {
        this.log(logLevel_enum_1.LogLevel.Trace, message, params);
    }
    debug(message, ...params) {
        this.log(logLevel_enum_1.LogLevel.Debug, message, params);
    }
    info(message, ...params) {
        this.log(logLevel_enum_1.LogLevel.Info, message, params);
    }
    warn(message, ...params) {
        this.log(logLevel_enum_1.LogLevel.Warning, message, params);
    }
    error(message, ...params) {
        this.log(logLevel_enum_1.LogLevel.Error, message, params);
    }
    fatal(message, ...params) {
        this.log(logLevel_enum_1.LogLevel.Fatal, message, params);
    }
}
exports.MemoryLogger = MemoryLogger;
//# sourceMappingURL=memoryLogger.class.js.map