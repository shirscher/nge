import { ILogger } from './logger';
import { ILoggerFactory } from './loggerFactory';
import { LogLevel } from './logLevel';

import { ConsoleLogger } from './console/consoleLogger';
import { ConsoleLoggerFactory } from './console/consoleLoggerFactory';
import { consoleLoggerModule } from './console/consoleLoggerModule';

import { MemoryLogger } from './memory/memoryLogger';
import { MemoryLoggerFactory } from './memory/memoryLoggerFactory';
import { memoryLoggerModule } from './memory/memoryLoggerModule';

import { NullLogger } from './null/nullLogger';
import { NullLoggerFactory } from './null/nullLoggerFactory';
import { nullLoggerModule } from './null/nullLoggerModule';

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
    consoleLoggerModule,
    memoryLoggerModule,
    nullLoggerModule,
};

/**
 * Export the console logger module as the default implementation
 */
export default consoleLoggerModule;
