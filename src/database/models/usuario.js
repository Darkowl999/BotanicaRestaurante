const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {};

Usuario.init({
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
        len: [2,50]
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [6, 20]
    }
}, {
    sequelize,
    modelName: "usuario"
});

module.exports = Usuario;