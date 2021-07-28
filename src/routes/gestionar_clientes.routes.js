const express = require('express');
const Cliente = require('../database/models/cliente');
const router = express.Router();

//CREATE
router.post('/cliente', (req, res) => {
    Cliente.create({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        usuarioId: req.body.usuarioId
    }).then(cliente => {
         res.json(cliente);
    })
});

//READ
router.get('/cliente/:id', (req, res) => {
    Cliente.findByPk(req.params.id).then(cliente => {   //ASI SE OBTIENE UN CLIENTE A TRAVES DE SU ID
         res.json(cliente);
         console.log(req.params.id);
    })
});

//READ ALL
router.get('/clientes', (req, res) => {
    Cliente.findAll().then(clientes => {
         res.json(clientes);
    })
});

//UPDATE
router.patch('/cliente/:id', (req, res) => {
    Cliente.update({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    });
});

//DELETE
router.delete('/cliente/:id', (req, res) => {
    Cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
         res.json(result);
    })
});

module.exports = router;