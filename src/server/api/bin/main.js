"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consoleLoggerFactory_class_1 = require("../../../../libs/logging-core/src/console/consoleLoggerFactory.class");
const version = require("./version.json");
const defaultLog = (new consoleLoggerFactory_class_1.ConsoleLoggerFactory()).create();
defaultLog.info('App started');
defaultLog.info(`Version ${version}`);
const env = process.env.NODE_ENV || 'dev';
defaultLog.info(`Running in ${env} environment`);
const containerBuilder = new InversifyContainerBuilder();
require(`./inversify.${env}.config`).default(kernel);
const server = new HapiServer();
const app = new ApiApplication(server, version, containerBuilder, defaultLog);
app.start((err) => {
    defaultLog.fatal(err);
});
defaultLog.info('App stopped');
//# sourceMappingURL=main.js.map