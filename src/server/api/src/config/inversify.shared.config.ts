import { IContainerBuilder } from '@nge/ioc-core/dist/containerBuilder.interface';
import { ILogger } from '@nge/logging-core/dist/logger.interface';

export default function init(containerBuilder: IContainerBuilder, defaultLog: ILogger): void {
    defaultLog.info('Initializing shared configuration');
}
