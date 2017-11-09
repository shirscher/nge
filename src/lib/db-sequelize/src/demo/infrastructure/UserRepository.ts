import { SequelizeDatabase } from '../../sequelize/SequelizeDatabase';
import { SequelizeRepository } from '../../sequelize/SequelizeRepository';

import { IUserAttributes } from '../core/IUserAttributes';

export class UserRepository extends SequelizeRepository<IUserAttributes, number> {
    constructor(database: SequelizeDatabase) {
        super(database, 'User');
    }
}
