const express = require('express');
const Roles = require('../database/models/roles');
const router = express.Router();

//CREATE
router.post('/rol', (req, res) => {
    Roles.create({
        rol: req.body.rol
    }).then(rol => {
         res.json(rol);
    });
});

//READ
router.get('/rol/:id', (req, res) => {
    Roles.findByPk(req.params.id).then(rol => {
         res.json(rol);
    });
});

//READ ALL
router.get('/roles', (req, res) => {
    Roles.findAll().then(roles => {
         res.json(roles);
    })
});

//UPDATE
router.patch('/rol/:id', (req, res) => {
    Roles.update({
        rol: req.body.rol
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    })
});

//DELETE
router.delete('/rol/:id', (req, res) => {
    Roles.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

module.exports = router;