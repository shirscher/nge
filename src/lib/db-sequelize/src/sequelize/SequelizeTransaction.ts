import * as Sequelize from 'sequelize';

import { IDbTransaction } from '../core/IDbTransaction';

export class SequelizeTransaction implements IDbTransaction {
    private seqTxn: Sequelize.Transaction;

    constructor(seqTxn: Sequelize.Transaction) {
        this.seqTxn = seqTxn;
    }

    public getTransaction(): Sequelize.Transaction {
        return this.seqTxn;
    }

    public commit(): PromiseLike<void> {
        return this.seqTxn.commit();
    }
    public rollback(): PromiseLike<void> {
        return this.seqTxn.rollback();
    }

}
