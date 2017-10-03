import { IContainerBuilder } from '@nge/ioc-core';
import { ILogger } from '@nge/logging-core';

import * as Logging from '@nge/logging-core';
// import * as Configuration from '@nge/config-core';

export function initDependencies(containerBuilder: IContainerBuilder, logger: ILogger) {
    logger.trace('Initializing DI container');

    // Configuration.jsonFileConfigStoreModule.initialize(containerBuilder, logger);
    Logging.consoleLoggerModule.initialize(containerBuilder);
}
