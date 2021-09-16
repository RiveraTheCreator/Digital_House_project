const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/', productsController.index);
router.get('/detalle/:id', productsController.detail);
//Crear producto
router.get('/crear/', productsController.crear);
router.post('/',productsController.procesar);


module.exports = router;