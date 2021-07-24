const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Pedido extends Model {};
Pedido.init({}, {
    sequelize,
    modelName: "pedido"
});

module.exports = Pedido;