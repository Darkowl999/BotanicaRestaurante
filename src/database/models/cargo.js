const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Cargo extends Model {};
Cargo.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [3, 50]
    }
}, {
    sequelize,
    modelName: "cargo"
});

module.exports = Cargo;