const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Pedido_Plato extends Model {};
Pedido_Plato.init({
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    modificacion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'pedido_plato'
});

module.exports = Pedido_Plato;