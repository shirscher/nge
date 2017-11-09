import * as Sequelize from 'sequelize';

export class SequelizeDatabaseFactory {
    private sequelize: Sequelize.Sequelize;

    constructor(sequelize?: Sequelize.Sequelize) {
        if (sequelize) {
            this.sequelize = sequelize;
        } else {
            this.sequelize = new Sequelize({
                dialect: 'sqlite',
                host: 'localhost',

                pool: {
                    idle: 10000,
                    max: 5,
                    min: 0,
                },

                // SQLite only
                storage: 'database.db',
            });
        }
    }
}
