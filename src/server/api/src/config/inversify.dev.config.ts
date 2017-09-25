import { IContainerBuilder } from '@nge/ioc-core/dist/containerBuilder.interface';
import { ILogger } from '@nge/logging-core/dist/logger.interface';
import * as Shared from './inversify.shared.config';

export default function init(containerBuilder: IContainerBuilder, defaultLog: ILogger): void {
    Shared.default(containerBuilder, defaultLog);

    defaultLog.info('Initializing dev configuration');
}
