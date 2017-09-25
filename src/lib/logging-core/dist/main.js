"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logLevel_1 = require("./logLevel");
exports.LogLevel = logLevel_1.LogLevel;
const consoleLogger_1 = require("./console/consoleLogger");
exports.ConsoleLogger = consoleLogger_1.ConsoleLogger;
const consoleLoggerFactory_1 = require("./console/consoleLoggerFactory");
exports.ConsoleLoggerFactory = consoleLoggerFactory_1.ConsoleLoggerFactory;
const consoleLoggerModule_1 = require("./console/consoleLoggerModule");
exports.initConsoleLogger = consoleLoggerModule_1.initConsoleLogger;
const memoryLogger_1 = require("./memory/memoryLogger");
exports.MemoryLogger = memoryLogger_1.MemoryLogger;
const memoryLoggerFactory_1 = require("./memory/memoryLoggerFactory");
exports.MemoryLoggerFactory = memoryLoggerFactory_1.MemoryLoggerFactory;
const memoryLoggerModule_1 = require("./memory/memoryLoggerModule");
exports.initMemoryLogger = memoryLoggerModule_1.initMemoryLogger;
const nullLogger_1 = require("./null/nullLogger");
exports.NullLogger = nullLogger_1.NullLogger;
const nullLoggerFactory_1 = require("./null/nullLoggerFactory");
exports.NullLoggerFactory = nullLoggerFactory_1.NullLoggerFactory;
const nullLoggerModule_1 = require("./null/nullLoggerModule");
exports.initNullLogger = nullLoggerModule_1.initNullLogger;
/**
 * Registers the default logger implementation
 */
exports.init = consoleLoggerModule_1.initConsoleLogger;
//# sourceMappingURL=main.js.map