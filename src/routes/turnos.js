const express= require('express');
const Turno = require('../database/models/turno');
const router= express.Router();

//CREATE
router.post('/turno',(req,res)=>{
    Turno.create({
        nombre: req.body.nombre,
        hora_llegada: req.body.hora_llegada,
        hora_salida: req.body.hora_salida
    }).then(turno => {
         res.json(turno);
    })
});

//READ ALL
router.get('/turnos', (req, res) => {
    Turno.findAll().then(turnos => {
         res.json(turnos);
    });
});

//UPDATE
router.patch('/turno/:id', (req, res) => {
    Turno.update({
        nombre: req.body.nombre,
        hora_llegada: req.body.hora_llegada,
        hora_salida: req.body.hora_salida
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

//DELETE
router.delete('/turno/:id', (req, res) => {
    Turno.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

module.exports=router;