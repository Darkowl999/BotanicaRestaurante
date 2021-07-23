const express= require('express');
const router= express.Router();
const Plato= require('../database/models/plato');


//CREATE 
router.post('/plato', (req, res) => {
    Plato.create({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        estado:req.body.estado,
        cantidad:req.body.cantidad
    }).then(plato=>{
        res.json(plato);
    })
});


//READ
router.get('/:id',(req,res)=>{
    res.json('plato');
});

module.exports=router;
