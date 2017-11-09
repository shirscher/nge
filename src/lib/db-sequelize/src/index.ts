import { userModelFactory } from './demo/infrastructure/UserModel';
import { UserRepository } from './demo/infrastructure/UserRepository';
import { SequelizeDatabase } from './sequelize/SequelizeDatabase';

const db = new SequelizeDatabase();

db.addModel(userModelFactory);

const repo = new UserRepository(db);
repo.save()