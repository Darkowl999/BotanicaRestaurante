const { Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Cliente extends Model {};
Cliente.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [3, 50]
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        isEmail: true
    }
}, {
    sequelize,
    modelName: "cliente"
});

module.exports = Cliente;