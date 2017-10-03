import * as hapi from 'hapi';

export class HapiServer {
    public modules: any[];
    public server: hapi.Server;

    constructor(server?: hapi.Server) {
        if (!server) {
            this.server = new hapi.Server();
        } else {
            this.server = server;
        }
    }

    public configure = (): void => {
        this.server.route([
            {
                handler: (request, reply): void => {
                    reply('Hello World!');
                },
                method: 'GET',
                path: '/',
            },
        ]);
    }

    public start = (errorCallback: (err: Error) => void): void => {
        this.server.start(errorCallback);
    }
}
