import * as hapi from 'hapi';

import { IApiServer } from '@nge/api-core';
import { IContainer } from '@nge/ioc-core';

export class HapiServer implements IApiServer {
    public modules: any[];
    public server: hapi.Server;

    constructor(server?: hapi.Server) {
        if (!server) {
            this.server = new hapi.Server();
        } else {
            this.server = server;
        }
    }

    public configure = (container: IContainer): void => {
        this.server.connection({
            port: 5555,
            routes: {
                cors: true,
            },
        });

        // if (configs.routePrefix) {
        //     server.realm.modifiers.route.prefix = configs.routePrefix;
        // }
    }

    public start = (errorCallback: (err: Error) => void): void => {
        this.server.start(errorCallback);
    }
}
