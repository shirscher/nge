"use strict";
/*
What we have to do:

    Basic boostrap
        As little here as possible, not testable!

        Get a basic logger
            Before we have dependencies we need a logger to log the setup of dependencies
                This will likely be a very simple logger (ConsoleLogger)
                Going forward this may be much more complicated:
                    e.g. Log to Winston using a logging service, get the URL of the logging server from a config server

        Get the environment
            Need the environment we are running in

        Configure dependencies - Given an environment and logger
            Could use other dependencies to configure a dependency:
                e.g.: builder.for<IEmailService>().buildUsing(
                            c => new MailChimpEmailClient(c.resolve<IConfigStore>().get('email.url'))));

            More likely - should use modules:
                const myModule = new MyModule();
                myModule.init(builder);

                or, better

                another file:
                    const MODULES = [
                        new MyModule(),
                        ...
                    ];

                builder.add(MODULES);

        Configure app
            From here we have dependencies, use them to configure stuff

            Create handlers
                Could work for both REST APIs and message handlers

        Start host(s)
            app.hosts.start()

What it should look like

import { IApplication } from '@nge/core';
import { HapiApp } from '@nge/hapi'; // or import { ExpressApp } from '@nge/express';
import { ConsoleLogFactory } from '@nge/logging';
import { InversifyContainerBuilder } from '@nge/inversify';
import { Modules } from './modules.ts';

const version = new Version(require('./version.json'));

const containerBuilder = new InversifyContainerBuilder();

const defaultLog = ConsoleLogFactory.create();
defaultLog.info('App started');
defaultLog.info(`Version ${version}`);

const app = new HapiApp(version, containerBuilder, defaultLog);

app.use(MODULES);

app.start(err => {
    defaultLog.fatal(err);
});

defaultLog.info('App complete');

or

import { ExpressApp } from '@nge/express-app';

*/
Object.defineProperty(exports, "__esModule", { value: true });
const application_class_1 = require("./application.class");
require("./hapiHostBuilder/useHapi");
(() => {
    //////////////////
    const host = new ApiHostBuilder()
        .useHapi()
        .use()
        .build();
    host.run();
    //////////////////
    const loggerFactory = new WinstonLoggerFactory();
    const logger = loggerFactory.create();
    const dependencies = configureDependencies(loggerFactory);
    const app = new application_class_1.Application();
    app.init();
    app.start();
})();
//# sourceMappingURL=index.js.map