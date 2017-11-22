import { Connection, Repository } from 'typeorm';

import { IEntity } from '../core/IEntity';
import { IRepository } from '../core/IRepository';

export class TypeOrmRepository<T extends IEntity<TId>, TId> implements IRepository<T, TId> {
    private repository: Repository<T>;

    constructor(public readonly connection: Connection, entityName: string) {
        this.repository = connection.getRepository<T>(entityName);
    }

    public getById(id: TId): PromiseLike<T | undefined> {
        return this.repository.findOneById(id);
    }

    public save(item: T): PromiseLike<T> {
        return this.repository.save([item])
            .then((value) => {
                return value[0] as T;
            });
    }

    public remove(item: T): PromiseLike<void> {
        return this.repository.remove([item])
            .then((_value) => {
                return;
            });
    }
}
