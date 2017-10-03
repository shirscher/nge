import 'reflect-metadata';

import { IContainerBuilder } from '@nge/ioc-core';
import { InversifyContainerBuilder } from '@nge/ioc-inversify';

import { ILogger } from '../../logger';
import { ILoggerFactory } from '../../loggerFactory';
import { Types } from '../../types';
import { ConsoleLogger } from '../consoleLogger';
import { ConsoleLoggerFactory } from '../consoleLoggerFactory';
import { consoleLoggerModule } from '../consoleLoggerModule';

describe('ConsoleLoggerModule', () => {
    let containerBuilder: IContainerBuilder;

    beforeEach(() => {
        containerBuilder = new InversifyContainerBuilder();
        consoleLoggerModule.initialize(containerBuilder);
    });

    describe('initialize', () => {
        it('should register the ILoggerFactory interface as the ConsoleLoggerFactory implementation', () => {
            const container = containerBuilder.build();

            const loggerFactory = container.resolve<ILoggerFactory>(Types.ILoggerFactory);

            expect(loggerFactory).toBeDefined();
            expect(loggerFactory instanceof ConsoleLoggerFactory).toBeTruthy();
        });

        it('should register the ILogger interface as the ConsoleLogger implementation', () => {
            const container = containerBuilder.build();

            const logger = container.resolve<ILogger>(Types.ILogger);

            expect(logger).toBeDefined();
            expect(logger instanceof ConsoleLogger).toBeTruthy();
        });

        it('should register ConsoleLoggerFactory as a singleton', () => {
            const container = containerBuilder.build();

            const loggerFactory1 = container.resolve<ILoggerFactory>(Types.ILoggerFactory);
            const loggerFactory2 = container.resolve<ILoggerFactory>(Types.ILoggerFactory);

            expect(loggerFactory1).toEqual(loggerFactory2);
        });

        it('should register ConsoleLogger as a singleton', () => {
            const container = containerBuilder.build();

            const logger1 = container.resolve<ILogger>(Types.ILogger);
            const logger2 = container.resolve<ILogger>(Types.ILogger);

            expect(logger1).toEqual(logger2);
        });
    });
});
