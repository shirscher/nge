export interface IDbTransaction {
    commit(): PromiseLike<void>;

    rollback(): PromiseLike<void>;
}
