import { ConnectionOptions, createConnection, getConnection, getConnectionManager } from 'typeorm';

import { IDatabase } from '../core/IDatabase';
import { IDatabaseFactory } from '../core/IDatabaseFactory';

import { TypeOrmDatabase } from '../typeorm/TypeOrmDatabase';

const databaseFactoryPromises: { [name: string]: PromiseLike<TypeOrmDatabase> } = {};

export class TypeOrmDatabaseFactory implements IDatabaseFactory {
    constructor(public readonly opts: ConnectionOptions) {
    }

    public create(): PromiseLike<IDatabase> {
        const name = this.opts.name ? this.opts.name : 'default';
        const manager = getConnectionManager();

        if (databaseFactoryPromises[name]) {
            return databaseFactoryPromises[name];
        } else {
            if (manager.has(name)) {
                return new Promise((resolve) => {
                    resolve(new TypeOrmDatabase(getConnection(name)));
                });
            } else {
                databaseFactoryPromises[name] = createConnection(this.opts).then(async (connection) => {
                    const database = new TypeOrmDatabase(connection);
                    delete databaseFactoryPromises[name];
                    return database;
                });
                return databaseFactoryPromises[name];
            }
        }
    }
}
