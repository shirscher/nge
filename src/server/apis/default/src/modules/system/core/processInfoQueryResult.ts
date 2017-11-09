export interface IProcessInfoQueryResult {
    env: NodeJS.ProcessEnv;
    nodeVersion: string;
    pid: number;
    platform: string;
}
