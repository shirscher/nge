import { Container } from "inversify";
import 'reflect-metadata';

import { IContainerBuilder } from '@nge/ioc-core';
import { InversifyContainerBuilder } from '@nge/ioc-inversify';

import { ILogger } from '../../logger.interface';
import { ILoggerFactory } from '../../loggerFactory.interface';
import { Types } from '../../types';
import { ConsoleLogger } from '../consoleLogger.class';
import { ConsoleLoggerFactory } from '../consoleLoggerFactory.class';
import { ConsoleLoggerModule } from '../consoleLoggerModule.class';

describe('ConsoleLoggerModule', () => {
    let mod: ConsoleLoggerModule;
    let containerBuilder: IContainerBuilder;

    beforeEach(() => {
        containerBuilder = new InversifyContainerBuilder(new Container());
        mod = new ConsoleLoggerModule();
    });

    describe('initialize', () => {
        it('should register the ILoggerFactory interface as the ConsoleLoggerFactory implementation', () => {
            mod.initialize(containerBuilder);
            const container = containerBuilder.build();

            const loggerFactory = container.resolve<ILoggerFactory>(Types.ILoggerFactory);

            expect(loggerFactory).toBeDefined();
            expect(loggerFactory instanceof ConsoleLoggerFactory).toBeTruthy();
        });

        it('should register the ILogger interface as the ConsoleLogger implementation', () => {
            mod.initialize(containerBuilder);
            const container = containerBuilder.build();

            const logger = container.resolve<ILogger>(Types.ILogger);

            expect(logger).toBeDefined();
            expect(logger instanceof ConsoleLogger).toBeTruthy();
        });
    });
});
