import { IApiModule } from '@nge/api-core';
import { InversifyContainerBuilder } from '@nge/ioc-inversify';
import { ConsoleLoggerFactory } from '@nge/logging-core';

import * as ioc from './bootstrap/iocConfig';
import { HapiServer } from './HapiServer';
import { Modules } from './modules/modules';

// import * as version from './version.json';

process.on('uncaughtException', (error: Error) => {
    // tslint:disable-next-line:no-console
    console.error(`uncaughtException ${error.message}`, error);
});
process.on('unhandledRejection', (reason: any) => {
    // tslint:disable-next-line:no-console
    console.error(`unhandledRejection ${reason}`, reason);
});

// Set up a log we can use until the IOC container is configured
const defaultLog = (new ConsoleLoggerFactory()).create();
defaultLog.info('App started');
// defaultLog.info(`Version ${version}`);

const env = process.env.NODE_ENV || 'dev';
defaultLog.info(`Running in ${env} environment`);

const containerBuilder = new InversifyContainerBuilder();
ioc.initDependencies(containerBuilder, defaultLog);
// const iocConfig = `./config/inversify.${env}.config`;
// defaultLog.info(`Requiring IOC config file ${iocConfig}`);
// tslint:disable-next-line:no-var-requires
// require(iocConfig).default(containerBuilder, defaultLog);

const server = new HapiServer(); // version, containerBuilder, defaultLog);
// const app = new ApiApplication(server, version, containerBuilder, defaultLog);
// app.start((err: Error) => {
//    defaultLog.fatal(err);
// });

const mods: IApiModule[] = [];
for (const moduleName of Modules) {
    defaultLog.info(`Loading API module ${moduleName}`);
    // tslint:disable-next-line:no-var-requires
    const mod: IApiModule = require('./modules/' + moduleName + '/main').default();
    mods.push(mod);
}

mods.forEach((mod) => { mod.initialize(containerBuilder); });

const container = containerBuilder.build();

server.configure();
mods.forEach((mod) => { mod.configure(server, container); });

server.start((err: Error) => {
    if (err) {
        defaultLog.error('Error occurred when starting server', err);
    } else {
        defaultLog.info('Server running at:', server.server.info ? server.server.info.uri : '');
    }
});

defaultLog.info('App stopped');
