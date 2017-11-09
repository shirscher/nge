import * as Sequelize from 'sequelize';

export type ModelFactory<T> =
    (sequelize: Sequelize.Sequelize, dataTypes: Sequelize.DataTypes) =>
    Sequelize.Model<T, T>;
