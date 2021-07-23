//ESTE FICHERO ES LA WEA PARA CREAR PRODUCTOS 

const {Model,DataTypes}=require('sequelize');
const sequelize = require('../db');

class Plato extends Model{}

Plato.init({
    //id_plato:DataTypes.INTEGER,
    nombre:DataTypes.STRING,
    descripcion:DataTypes.TEXT,
    precio:DataTypes.FLOAT,
    estado:DataTypes.STRING,
    cantidad:DataTypes.INTEGER
},{
    sequelize,
    modelName:"plato"

});
module.exports=Plato;

