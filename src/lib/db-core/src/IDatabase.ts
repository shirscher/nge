import { IDbTransaction } from "./IDbTransaction";

export interface IDatabase {
    beginTransaction(): IDbTransaction;
}

export interface IDatabaseFactory {
    create(): IDatabase;
}
