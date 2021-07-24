const express = require('express');
const router = express.Router();
const Area = require('../database/models/area');

//CREATE
router.post('/area', (req, res) => {
    Area.create({
        descripcion: req.body.descripcion,
        cantidad_mesas: req.body.cantidad_mesas
    }).then(area => {
         res.json(area);
    })
});

//READ
router.get('/area/:id', (req, res) => {
    Area.findByPk(req.params.id).then(area => {
         res.json(area);
    })
});

//READ ALL
router.get('/areas', (req, res) => {
    Area.findAll().then(areas => {
         res.json(areas);
    })
});

//UPDATE
router.patch('/area/:id', (req, res) => {
    Area.update({
        descripcion: req.body.descripcion,
        cantidad_mesas: req.body.cantidad_mesas
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

//DELETE
router.delete('/area/:id', (req, res) => {
    Area.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

module.exports = router;