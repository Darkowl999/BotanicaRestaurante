const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Reserva extends Model {};
Reserva.init({
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    cant_personas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'reserva'
});

module.exports = Reserva;