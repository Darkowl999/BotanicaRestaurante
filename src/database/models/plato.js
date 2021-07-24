//ESTE FICHERO ES LA WEA PARA CREAR PRODUCTOS 

const {Model,DataTypes}=require('sequelize');
const sequelize = require('../db');

class Plato extends Model{}

Plato.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1, 20]
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName:"plato"
});
module.exports=Plato;

