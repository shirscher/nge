import { IDbTransaction } from './IDbTransaction';

export interface IDatabase {
    beginTransaction(): PromiseLike<IDbTransaction>;

    beginTransaction<T>(operation: (database: IDatabase) => PromiseLike<T>): PromiseLike<T>;
}
