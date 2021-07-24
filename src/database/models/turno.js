const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Turno extends Model {};
Turno.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [3, 50]
    },
    hora_llegada: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_salida: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "turno"
});

module.exports = Turno;