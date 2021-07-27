const sequelize=require('./database/db');
const app= require('./server');

const port= process.env.PORT||5000;


app.listen(port,function(){
    console.log("Sever on port 5000");

    sequelize.sync({force:false}).then(()=>{
        console.log("nos hemos conectado a la base de datos");
    }).catch(error=>{
        console.log("se ha producido un error",error);
    })



});
