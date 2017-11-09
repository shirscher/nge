import { IDatabase } from './IDatabase';
import { IEntity } from './IEntity';

export interface IRepository<T extends IEntity<TId>, TId, TDb extends IDatabase> {
    getDatabase(): TDb;

    getById(id: TId): PromiseLike<T>;

    add(item: T): PromiseLike<void>;

    remove(item: T): PromiseLike<void>;
}

export interface IPagingSpecification {
    limit: number;
    offset: number;
}
