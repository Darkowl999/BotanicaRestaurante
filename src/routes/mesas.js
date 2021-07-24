const express = require('express');
const router = express.Router();
const Mesa = require('../database/models/mesa');

//CREATE
router.post('/mesa', (req, res) => {
    Mesa.create({
        capacidad: req.body.capacidad,
        estado: req.body.estado,
        areaId: req.body.areaId
    }).then(mesa => {
         res.json(mesa);
    })
});

//READ
router.get('/mesa/:id', (req, res) => {
    Mesa.findByPk(req.params.id).then(mesa => {
         res.json(mesa);
    });
});

//READ ALL
router.get('/mesas', (req, res) => {
    Mesa.findAll().then(mesas => {
         res.json(mesas);
    });
});

//UPDATE
router.patch('/mesa/:id', (req, res) => {
    Mesa.update({
        capacidad: req.body.capacidad,
        estado: req.body.estado,
        areaId: req.body.areaId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    })
});

//DELETE
router.delete('/mesa/:id', (req, res) => {
    Mesa.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

module.exports = router;