import { IContainer } from '@nge/ioc-core';

export interface IApiServer {
    /**
     * Configures the server.
     *
     * @param container The container to use to resolve dependencies required to configure the server.
     */
    configure(container: IContainer): void;

    /**
     * Starts the API.
     *
     * @returns A promise the resolves when the API is shut down or rejects when an error occurs during startup.
     */
    start(): PromiseLike<ApiShutdownReason>;
}

export enum ApiShutdownReason {
    FatalError,
    ManualShutdown,
    UserShutdown,
}
