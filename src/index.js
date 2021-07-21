const express= require('express');

const app=express();


const port= process.env.PORT||4000;



app.listen(port,function(){
    console.log("Sever on port 4000");
});