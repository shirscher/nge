import { Connection, QueryRunner } from 'typeorm';

import { IDbTransaction } from '../core/IDbTransaction';

import { TypeOrmDatabase } from './TypeOrmDatabase';

export class TypeOrmTransaction implements IDbTransaction {
    constructor(public readonly database: TypeOrmDatabase, public readonly queryRunner: QueryRunner) {
    }

    public getConnection(): Connection {
        return this.database.connection;
    }

    public async commit(): Promise<void> {
        if (this.queryRunner.isReleased) {
            throw new Error('Transaction has already completed');
        }

        await this.queryRunner.commitTransaction();
        await this.queryRunner.release();
        this.database.clearCurrentTransaction();
    }

    public async rollback(): Promise<void> {
        if (this.queryRunner.isReleased) {
            throw new Error('Transaction has already completed');
        }

        await this.queryRunner.rollbackTransaction();
        await this.queryRunner.release();
        this.database.clearCurrentTransaction();
    }
}
