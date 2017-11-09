export interface IRequestContext {
    sessionContextId: string;
    requestContextId: string;
    requestContextIdChain?: string[];
}
