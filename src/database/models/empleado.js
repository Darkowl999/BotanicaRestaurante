const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Empleado extends Model {};

Empleado.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [3, 50]
    },
    direccion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [1, 50]
    }
}, {
    sequelize,
    modelName: "empleado"
});

module.exports = Empleado;