const express= require('express');
const router= express.Router();


router.get('/registro',(req,res)=>{
    res.send('registro');
});

module.exports=router;

//raul perro