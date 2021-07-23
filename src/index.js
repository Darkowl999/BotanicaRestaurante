//ACÁ LLAMO O USO A EXPRESS
const express= require('express');
//PATH SIRVE PARA LOCALIZAR RUTAS DE ARCHIVOS DENTRO DEL PROYECTO
const path= require('path');
//HANDLEBARS ES EL MOTOR DE PLANTILLAS
const exphbs=require('express-handlebars');
const methodOverride=require('method-override');

const app=express();



const port= process.env.PORT||4000;


//settings 
app.set('port',process.env.PORT||4000);
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


//routes 
app.use(require('./routes/index'));
app.use(require('./routes/home'));
app.use(require('./routes/registro'));
app.use(require('./routes/turnos'));





app.listen(port,function(){
    console.log("Sever on port 4000");
});
