import * as Sequelize from 'sequelize';

import { IUserAttributes } from '../core/IUserAttributes';
import { ModelFactory } from './ModelFactory';

export const userModelFactory: ModelFactory<IUserAttributes> =
(sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) => {
    const userModel = sequelize.define<IUserAttributes, IUserAttributes>(
        'User', {
            description: { type: dataTypes.TEXT, allowNull: true },
            name: { type: dataTypes.STRING, allowNull: false, primaryKey: true },
        }, {
            classMethods: {},
            indexes: [],
            timestamps: false,
        });

    return userModel;
};
