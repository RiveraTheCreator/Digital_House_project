const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);
router.get('/carrito',  mainController.carrito);
router.get('/detalle',  mainController.detalle);
router.get('/login',    mainController.login);
router.get('/registro', mainController.registro);
router.get('/edicion', mainController.edicion);

module.exports = router;
