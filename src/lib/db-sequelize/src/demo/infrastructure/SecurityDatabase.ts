import { SequelizeDatabase } from '../../sequelize/SequelizeDatabase';

import { ISecurityModel } from '../infrastructure/ISecurityModel';

export class SecurityDatabase extends SequelizeDatabase<ISecurityModel> {
}
