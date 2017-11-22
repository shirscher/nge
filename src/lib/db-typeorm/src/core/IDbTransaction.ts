export interface IDbTransaction {
    commit(): Promise<void>;

    rollback(): Promise<void>;
}
