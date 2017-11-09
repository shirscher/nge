import { IEntity } from './IEntity';

export interface IRepository<T extends IEntity<TId>, TId> {
    getById(id: TId): PromiseLike<T>;

    save(item: T): PromiseLike<void>;

    remove(item: T): PromiseLike<void>;
}

export interface IPagingSpecification {
    limit: number;
    offset: number;
}
