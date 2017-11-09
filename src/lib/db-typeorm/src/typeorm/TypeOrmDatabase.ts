import { Connection } from 'typeorm';

import { IDatabase } from '../core/IDatabase';

export class TypeOrmDatabase implements IDatabase {
    constructor(public readonly connection: Connection) {

    }

    public beginTransaction(): PromiseLike<IDbTransaction> {
        return this.connection.transaction()
    }
}
