const sequelize=require('./database/db');
const app= require('./server');

const port= process.env.PORT||5000;


<<<<<<< HEAD
=======
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
app.use(require('./routes//login'));
app.use(require('./routes/registro'));
app.use(require('./routes/turnos'));
app.use(require('./routes/plato'));
app.use(require('./routes/areas'));
app.use(require('./routes/mesas'));
app.use(require('./routes/roles'));
app.use(require('./routes/gestionar_usuarios'));
app.use(require('./routes/gestionar_clientes'));



//asasasasasas

>>>>>>> 31fab7f2b59a7c886745e62b5e2df0cb119db083
app.listen(port,function(){
    console.log("Sever on port 5000");

    sequelize.sync({force:false}).then(()=>{
        console.log("nos hemos conectado a la base de datos");
    }).catch(error=>{
        console.log("se ha producido un error",error);
    })



});
