const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

// *** Genera la vista para mostrar todos los productos ***
router.get('/', productsController.index);
router.get('/detalle/:id', productsController.detail);
//Crear producto
router.get('/crear/', productsController.crear);
router.post('/',productsController.procesar);
//Obtener un producto... No debes confundir con crear un producto
router.get('/:id', productsController.detail);

module.exports = router;