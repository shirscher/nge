import * as Sequelize from 'sequelize';

import { IEntity } from '../core/IEntity';
import { IRepository } from '../core/IRepository';

import { SequelizeDatabase } from './SequelizeDatabase';

export abstract class SequelizeRepository<T extends IEntity<TId>, TId, TModel extends Sequelize.ModelsHashInterface>
    implements IRepository<T, TId> {

    constructor(private database: SequelizeDatabase<TModel>, private modelName: string) {
    }

    public create(item: T): Promiselike<T> {
        return this.database.models[this.modelName].create();
    }

    public save(item: T): PromiseLike<void> {
        return this.model.addOrUpdate(item as Sequelize.Instance<T>);
    }

    public remove(item: T): PromiseLike<void> {
        this.database.getModel(this.modelName).dele
    }
    
    public getById(id: TId): PromiseLike<T> {
        if (typeof id === 'string' || typeof id === 'number') {
            return this.database.getModel(this.modelName).findById(id)
                .then((i) => {
                    if (!i) {
                        return i;
                    }
                    return i.
                });
        }
        throw new Error('Sequelize only supports numeric or string primary keys for the findById operation');
    }
}
