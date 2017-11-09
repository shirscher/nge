import 'reflect-metadata';
import {createConnection} from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import {User} from './entity/User';

// tslint:disable:no-console

const opts: SqliteConnectionOptions = {
    database: 'database.db',
    entitySchemas: [
        {
            columns: {
                age: {
                    nullable: false,
                    type: 'int',
                },
                firstName: {
                    length: 50,
                    type: 'varchar',
                },
                id: {
                    generated: 'increment',
                    primary: true,
                    type: 'int',
                },
                lastName: {
                    length: 50,
                    type: 'varchar',
                },
            },
            name: 'User',
            table: {
                name: 'User',
            },
        },
    ],
    type: 'sqlite',
};

createConnection(opts).then(async (connection) => {
    console.log('Inserting a new user into the database...');
    let user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    const repo = connection.getRepository<User>('User');
    user = await repo.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await repo.findOneById(user.id);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');

}).catch((error) => console.log(error));
