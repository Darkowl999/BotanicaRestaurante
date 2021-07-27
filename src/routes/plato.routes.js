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
router.get('/plato/:id',(req,res)=>{
    Plato.findByPk(req.params.id).then(plato => {
         res.json(plato);
    });
});

//READ ALL
router.get('/platos', (req, res) => {
    Plato.findAll().then(platos => {
         res.json(platos);
    });
});

//UPDATE
router.patch('/plato/:id', (req, res) => {
    Plato.update({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        estado: req.body.estado,
        cantidad: req.body.cantidad
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

//DELETE
router.delete('/plato/:id', (req, res) => {
    Plato.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

module.exports=router;
