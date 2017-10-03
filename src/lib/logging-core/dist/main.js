"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logLevel_1 = require("./logLevel");
exports.LogLevel = logLevel_1.LogLevel;
const consoleLogger_1 = require("./console/consoleLogger");
exports.ConsoleLogger = consoleLogger_1.ConsoleLogger;
const consoleLoggerFactory_1 = require("./console/consoleLoggerFactory");
exports.ConsoleLoggerFactory = consoleLoggerFactory_1.ConsoleLoggerFactory;
const consoleLoggerModule_1 = require("./console/consoleLoggerModule");
exports.consoleLoggerModule = consoleLoggerModule_1.consoleLoggerModule;
const memoryLogger_1 = require("./memory/memoryLogger");
exports.MemoryLogger = memoryLogger_1.MemoryLogger;
const memoryLoggerFactory_1 = require("./memory/memoryLoggerFactory");
exports.MemoryLoggerFactory = memoryLoggerFactory_1.MemoryLoggerFactory;
const memoryLoggerModule_1 = require("./memory/memoryLoggerModule");
exports.memoryLoggerModule = memoryLoggerModule_1.memoryLoggerModule;
const nullLogger_1 = require("./null/nullLogger");
exports.NullLogger = nullLogger_1.NullLogger;
const nullLoggerFactory_1 = require("./null/nullLoggerFactory");
exports.NullLoggerFactory = nullLoggerFactory_1.NullLoggerFactory;
const nullLoggerModule_1 = require("./null/nullLoggerModule");
exports.nullLoggerModule = nullLoggerModule_1.nullLoggerModule;
/**
 * Export the console logger module as the default implementation
 */
exports.default = consoleLoggerModule_1.consoleLoggerModule;
//# sourceMappingURL=main.js.map