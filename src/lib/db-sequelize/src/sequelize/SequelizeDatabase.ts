import * as Sequelize from 'sequelize';

import { IDatabase } from '../core/IDatabase';
import { IDbTransaction } from '../core/IDbTransaction';

import { ModelFactory } from './ModelFactory';
import { SequelizeTransaction } from './SequelizeTransaction';

export class SequelizeDatabase<TModel extends Sequelize.ModelsHashInterface> implements IDatabase {
    public readonly models: TModel;
    public readonly sequelize: Sequelize.Sequelize;

    constructor() {
        // (Sequelize as any).cls = cls.createNamespace("sequelize-transaction");

        this.sequelize = new Sequelize('database', 'username', 'password', {
            dialect: 'sqlite',
            pool: {
                idle: 10000,
                max: 5,
                min: 0,
            },
            storage: './database.sqlite',
        });
    }

    public beginTransaction(): PromiseLike<IDbTransaction> {
        return this.sequelize.transaction()
            .then((seqTxn) => {
                return new SequelizeTransaction(seqTxn);
            });
    }

    public addModel<T>(modelFactory: ModelFactory<T>): void {
        modelFactory(this.sequelize, Sequelize);
    }

    public getSequelize(): Sequelize.Sequelize {
        return this.sequelize;
    }
}
