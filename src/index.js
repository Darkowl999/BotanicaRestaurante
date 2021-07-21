const express= require('express');
const path= require('path');
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





app.listen(port,function(){
    console.log("Sever on port 4000");
});
