const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Roles extends Model {};
Roles.init({
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [2, 25]
    }
}, {
    sequelize,
    modelName: "roles"
});

module.exports = Roles;