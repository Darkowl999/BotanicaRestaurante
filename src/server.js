const express= require('express');
//PATH SIRVE PARA LOCALIZAR RUTAS DE ARCHIVOS DENTRO DEL PROYECTO
const path= require('path');
//HANDLEBARS ES EL MOTOR DE PLANTILLAS
const exphbs=require('express-handlebars');
const methodOverride=require('method-override');
//const { Sequelize } = require('sequelize/types');

require('./database/relaciones');

const app=express();

//settings 
app.set('port',process.env.PORT||5000);
app.set('views',path.join(__dirname,'views'));

app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');

//static files 
app.use(express.static(path.join(__dirname,'public')));

//middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

//routes 
app.use(require('./routes/index.routes'));
app.use(require('./routes/home.routes'));
app.use(require('./routes/registro.routes'));
app.use(require('./routes/turnos.routes'));
app.use(require('./routes/plato.routes'));



//asasasasasas


module.exports=app;