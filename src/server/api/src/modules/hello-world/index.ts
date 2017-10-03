import { IContainerBuilder } from '@nge/ioc-core';
import { ILogger } from '@nge/logging-core';

export default function init(containerBuilder: IContainerBuilder, defaultLog: ILogger): void {
    defaultLog.info('Initializing hello-world module');
}
