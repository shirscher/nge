"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pre-defined severity levels for log entries.
 */
var LogLevel;
(function (LogLevel) {
    /**
     * Designates finer-grained informational events than the DEBUG.
     */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /**
     * Designates fine-grained informational events that are most useful to debug an application.
     */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /**
     * Designates informational messages that highlight the progress of the application at coarse-grained level.
     */
    LogLevel[LogLevel["Info"] = 2] = "Info";
    /**
     * Designates potentially harmful situations.
     */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /**
     * Designates error events that might still allow the application to continue running.
     */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /**
     * Designates very severe error events that will presumably lead the application to abort.
     */
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
//# sourceMappingURL=logLevel.enum.js.map