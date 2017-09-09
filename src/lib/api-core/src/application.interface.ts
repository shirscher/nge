export interface IApplication {
    // dependencyContainer: IContainer;
    // getModules: IModule[]
    start(): void;
}

export interface IServer {
    start(): void;
}
