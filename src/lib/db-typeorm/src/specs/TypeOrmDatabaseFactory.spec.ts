import { TypeOrmDatabase } from '../typeorm/TypeOrmDatabase';
import { TypeOrmDatabaseFactory } from '../typeorm/TypeOrmDatabaseFactory';

describe('create', () => {
    it('should create a new typeorm database', () => {
        const factory = new TypeOrmDatabaseFactory({
            database: './database.db',
            type: 'sqlite',
        });

        factory.create().then((db) => {
            expect(db instanceof TypeOrmDatabase).toBeTruthy();
        });
    });

    it('should return the same promise when called in quick succession', () => {
        const factory = new TypeOrmDatabaseFactory({
            database: './database.db',
            type: 'sqlite',
        });

        const promise1 = factory.create();
        const promise2 = factory.create();
        const promise3 = factory.create();

        expect(promise1).toEqual(promise2);
        expect(promise2).toEqual(promise3);
    });

    it('should return same TypeORM connection when called multiple times', () => {
        const factory = new TypeOrmDatabaseFactory({
            database: './database.db',
            type: 'sqlite',
        });

        factory.create().then((db1) => {
            factory.create().then((db2) => {
                expect((db1 as TypeOrmDatabase).getTypeOrmConnection())
                    .toEqual((db2 as TypeOrmDatabase).getTypeOrmConnection());
            });
        });
    });

    it('should return same TypeORM connection when called with same name', () => {
        const factory1 = new TypeOrmDatabaseFactory({
            name: 'database1',
            database: './database.db',
            type: 'sqlite',
        });

        const factory2 = new TypeOrmDatabaseFactory({
            name: 'database1',
            database: './database.db',
            type: 'sqlite',
        });

        return factory1.create().then((db1) => {
            return factory2.create().then((db2) => {
                expect((db1 as TypeOrmDatabase).getTypeOrmConnection())
                    .toEqual((db2 as TypeOrmDatabase).getTypeOrmConnection());
            });
        });
    });

    it('should return different TypeORM connections when called with different names', () => {
        const factory1 = new TypeOrmDatabaseFactory({
            name: 'database1',
            database: './database.db',
            type: 'sqlite',
        });

        const factory2 = new TypeOrmDatabaseFactory({
            name: 'database2',
            database: './database.db',
            type: 'sqlite',
        });

        factory1.create().then((db1) => {
            return factory2.create().then((db2) => {
                expect((db1 as TypeOrmDatabase).getTypeOrmConnection())
                    .not.toEqual((db2 as TypeOrmDatabase).getTypeOrmConnection());
            });
        });
    });
});
