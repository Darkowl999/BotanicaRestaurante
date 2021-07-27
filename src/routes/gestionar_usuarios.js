const express = require('express');
const Usuario = require('../database/models/usuario');
const router = express.Router();

//CREATE
router.post('/usuario', (req, res) => {
    Usuario.create({
        nombre_usuario: req.body.nombre_usuario,
        contraseña: req.body.contraseña,
        roleId: req.body.roleId
    }).then(usuario => {
         res.json(usuario);
    });
});

//READ
router.get('/usuario:id', (req, res) => {
    Usuario.findByPk(req.params.id).then(usuario => {
         res.json(usuario);
    })
});

//READ ALL
router.get('/usuarios', (req, res) => {
    Usuario.findAll().then(usuarios => {
         res.json(usuarios);
    })
});

//UPDATE
router.patch('/usuario/:id', (req, res) => {
    Usuario.update({
        nombre_usuario: req.body.nombre_usuario,
        contraseña: req.body.contraseña
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    })
});

//DELETE
router.delete('/usuario/:id', (req, res) => {
    Usuario.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    })
});

module.exports = router;