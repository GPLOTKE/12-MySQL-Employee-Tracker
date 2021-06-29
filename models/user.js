const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        // prevents duplicate email addresses in DB
        unique: true,
        // checks for email format (foo@bar.com)
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = User;