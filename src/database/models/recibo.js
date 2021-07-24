const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Recibo extends Model{};
Recibo.init({
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "recibo"
});

module.exports = Recibo;