import { IContainerBuilder } from '@nge/ioc-core';
import { ILogger } from '@nge/logging-core';

// tslint:disable-next-line:variable-name
export default function init(_containerBuilder: IContainerBuilder, defaultLog: ILogger): void {
    defaultLog.info('Initializing hello-world module');
}
