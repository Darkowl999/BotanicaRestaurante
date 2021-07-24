const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Area extends Model{};
Area.init({
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
        isAlpha: true,
    },
    cantidad_mesas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "area"
});

module.exports = Area;