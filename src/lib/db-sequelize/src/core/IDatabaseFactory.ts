import { IDatabase } from './IDatabase';

export interface IDatabaseFactory {
    create(): IDatabase;
}
