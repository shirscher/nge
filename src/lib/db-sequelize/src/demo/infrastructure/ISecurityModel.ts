import * as Sequelize from 'sequelize';

import { IUserAttributes } from 'src/demo/core/IUserAttributes';

export interface ISecurityModel extends Sequelize.ModelsHashInterface {
    users: Sequelize.Model<IUserAttributes, IUserAttributes>;
}
