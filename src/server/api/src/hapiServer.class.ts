import * as hapi from 'hapi';
import { IApiServer } from './apiServer.interface';

export class HapiServer implements IApiServer {
    public modules: any[];

    constructor(public server?: hapi.Server) {
        if (!server) {
            this.server = new hapi.Server();
        }
    }

    public configure = (): void => {
        // todo:
    }

    public start = (err: Error): any => {
        return {};
    }
}

server.route({
    handler: (request, reply): void => {
        reply('Hello World!');
    },
    method: 'GET',
    path: '/',
});

server.start((err) => {
    if (err) {
        throw err;
    }

    if (server.info) {
        // console.log('Server running at:', server.info.uri);
    }
});
