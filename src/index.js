//ACÁ LLAMO O USO A EXPRESS
const express= require('express');
//PATH SIRVE PARA LOCALIZAR RUTAS DE ARCHIVOS DENTRO DEL PROYECTO
const path= require('path');
//HANDLEBARS ES EL MOTOR DE PLANTILLAS
const exphbs=require('express-handlebars');
const methodOverride=require('method-override');
//const { Sequelize } = require('sequelize/types');
const sequelize=require('./database/db');

const app=express();



const port= process.env.PORT||5000;


//settings 
app.set('port',process.env.PORT||5000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
   // partialsDir:path.join(app.get('vies'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','hbs');

//static files 
app.use(express.static(path.join(__dirname,'public')));

//middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes 
app.use(require('./routes/index'));
app.use(require('./routes/home'));
app.use(require('./routes/registro'));
app.use(require('./routes/turnos'));
app.use(require('./routes/plato'));



//asasasasasas

app.listen(port,function(){
    console.log("Sever on port 5000");

    sequelize.sync({force:true}).then(()=>{
        console.log("nos hemos conectado a la base de datos");
    }).catch(error=>{
        console.log("se ha producido un error",error);
    })



});
