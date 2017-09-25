import { ILogger } from './logger';
import { ILoggerFactory } from './loggerFactory';
import { LogLevel } from './logLevel';

import { ConsoleLogger } from './console/consoleLogger';
import { ConsoleLoggerFactory } from './console/consoleLoggerFactory';
import { initConsoleLogger } from './console/consoleLoggerModule';

import { MemoryLogger } from './memory/memoryLogger';
import { MemoryLoggerFactory } from './memory/memoryLoggerFactory';
import { initMemoryLogger } from './memory/memoryLoggerModule';

import { NullLogger } from './null/nullLogger';
import { NullLoggerFactory } from './null/nullLoggerFactory';
import { initNullLogger } from './null/nullLoggerModule';

export {
    ConsoleLogger,
    ConsoleLoggerFactory,
    ILogger,
    ILoggerFactory,
    LogLevel,
    MemoryLogger,
    MemoryLoggerFactory,
    NullLogger,
    NullLoggerFactory,
    initConsoleLogger,
    initMemoryLogger,
    initNullLogger,
};

/**
 * Registers the default logger implementation
 */
const moduleFactory: IDependencyModule = {
    init: initConsoleLogger
};
export default moduleFactory;
