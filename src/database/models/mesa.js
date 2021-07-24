const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Mesa extends Model {};
Mesa.init({
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [1, 20],
    }
}, {
    sequelize,
    modelName: "mesa"
});

module.exports = Mesa;