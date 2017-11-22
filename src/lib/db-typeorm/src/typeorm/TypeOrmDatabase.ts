import { Connection } from 'typeorm';

import { IDbTransaction } from 'src/core/IDbTransaction';
import { IDatabase } from '../core/IDatabase';

import { TypeOrmTransaction } from './TypeOrmTransaction';

// import { TypeOrmTransaction } from './TypeOrmTransaction';

export class TypeOrmDatabase implements IDatabase {
    private transaction?: TypeOrmTransaction;

    constructor(public readonly connection: Connection) {
        this.connection = connection;
    }

    public clearCurrentTransaction(): void {
        this.transaction = undefined;
    }

    public async beginTransaction(): Promise<IDbTransaction> {
        if (this.transaction) {
            return this.transaction;
        }

        const queryRunner = this.connection.driver.createQueryRunner('master');
        await queryRunner.startTransaction();
        this.transaction = new TypeOrmTransaction(this, queryRunner);
        return this.transaction;
    }

    // public beginTransaction<T>(operation: (database: IDatabase) => PromiseLike<T>): PromiseLike<T> {
    //     return this.connection.transaction((entityManager) => {
    //         return operation(new TypeOrmDatabase(entityManager)) as Promise<any>;
    //     });
    // }
}
