import { TypeOrmDatabase } from '../typeorm/TypeOrmDatabase';
import { TypeOrmDatabaseFactory } from '../typeorm/TypeOrmDatabaseFactory';

describe('transaction', () => {
    it('should roll back', async (done) => {
        const db = await (new TypeOrmDatabaseFactory({
            database: './database.db',
            type: 'sqlite',
        }))
        .create();

        const toDb = db as TypeOrmDatabase;
        const tableExists = await toDb.getTypeOrmConnection().query(
            'SELECT COUNT(*) AS c FROM sqlite_master WHERE name=\'TypeOrmDatabaseTest\' AND type=\'table\'');

        if (tableExists[0].c === 0) {
            await toDb.getTypeOrmConnection().query('CREATE TABLE TypeOrmDatabaseTest (i int)');
        }

        let txnCount: any;
        try {
            await db.beginTransaction(async (txn) => {
                const toTxn = txn as TypeOrmDatabase;
                const em = toTxn.getEntityManager();
                em.query('INSERT INTO TypeOrmDatabaseTest (i) VALUES (1)');
                em.query('INSERT INTO TypeOrmDatabaseTest (i) VALUES (2)');
                txnCount = await em.query('SELECT COUNT(*) AS c FROM TypeOrmDatabaseTest');
                throw new Error('Failure, rollback');
            });
        } catch (err) {
            console.log(err);
        }

        const afterCount = await toDb.getTypeOrmConnection().query('SELECT COUNT(*) AS c FROM TypeOrmDatabaseTest');

        await toDb.getTypeOrmConnection().query('DROP TABLE TypeOrmDatabaseTest');

        expect(txnCount[0].c).toEqual(2);
        expect(afterCount[0].c).toEqual(0);

        done();
    });

    // it('should commit', () => {

    // });
});
