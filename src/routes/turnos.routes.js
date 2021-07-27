const express= require('express');
const router= express.Router();

router.get('/turnos',(req,res)=>{
    res.send('turnos');
});

module.exports=router;