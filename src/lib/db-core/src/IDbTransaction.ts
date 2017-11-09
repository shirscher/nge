export interface IDbTransaction {
    commit(): void;

    rollback(): void;
}
