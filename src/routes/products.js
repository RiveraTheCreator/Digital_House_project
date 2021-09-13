const express = require('express');
const router = express.Router();
const mainController = require('../controllers/productsController.js');

router.get('/', productsController.index)

router.get('/detalle/:id', productsController.detalle)

module.exports = router;