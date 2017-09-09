"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogLevel {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    toString() {
        return this.name;
    }
}
/**
 * Designates finer-grained informational events than the DEBUG.
 */
LogLevel.Trace = new LogLevel('Trace', 0);
/**
 * Designates fine-grained informational events that are most useful to debug an application.
 */
LogLevel.Debug = new LogLevel('Debug', 1);
/**
 * Designates informational messages that highlight the progress of the application at coarse-grained level.
 */
// tslint:disable-next-line:no-magic-numbers
LogLevel.Info = new LogLevel('Info', 2);
/**
 * Designates potentially harmful situations.
 */
// tslint:disable-next-line:no-magic-numbers
LogLevel.Warning = new LogLevel('Warning', 3);
/**
 * Designates error events that might still allow the application to continue running.
 */
// tslint:disable-next-line:no-magic-numbers
LogLevel.Error = new LogLevel('Error', 4);
/**
 * Designates very severe error events that will presumably lead the application to abort.
 */
// tslint:disable-next-line:no-magic-numbers
LogLevel.Fatal = new LogLevel('Fatal', 5);
exports.LogLevel = LogLevel;
//# sourceMappingURL=logLevel.enum.js.map