import { IDbTransaction } from './IDbTransaction';

export interface IDatabase {
    beginTransaction(): PromiseLike<IDbTransaction>;
}
