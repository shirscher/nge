import { ConnectionOptions, createConnection } from 'typeorm';

import { IDatabase } from '../core/IDatabase';
import { IDatabaseFactory } from '../core/IDatabaseFactory';

import { TypeOrmDatabase } from '../typeorm/TypeOrmDatabase';

export class TypeOrmDatabaseFactory implements IDatabaseFactory {
    constructor(public readonly opts: ConnectionOptions) {
    }

    public create(): PromiseLike<IDatabase> {
        return createConnection(this.opts).then(async (connection) => {
            return new TypeOrmDatabase(connection);
        });
    }
}
