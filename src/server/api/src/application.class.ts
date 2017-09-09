import { IApiServer } from './apiServer.interface';

export class Application {
    constructor(public server: IApiServer) {
    }

    public init(): void {
        this.server.configure();
    }

    public start(): void {
        this.server.start();
    }
}
