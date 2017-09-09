import { ConsoleLoggerFactory } from '../../../../libs/logging-core/src/console/consoleLoggerFactory.class';

import * as version from './version.json';

const defaultLog = (new ConsoleLoggerFactory()).create();
defaultLog.info('App started');
defaultLog.info(`Version ${version}`);

const env = process.env.NODE_ENV || 'dev';
defaultLog.info(`Running in ${env} environment`);

const containerBuilder = new InversifyContainerBuilder();
require(`./inversify.${env}.config`).default(kernel);

const server = new HapiServer();
const app = new ApiApplication(server, version, containerBuilder, defaultLog);

app.start((err: Error) => {
    defaultLog.fatal(err);
});

defaultLog.info('App stopped');
