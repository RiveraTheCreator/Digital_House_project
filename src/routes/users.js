const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController.js');

//Vista de login & validacion por post
router.get('/login',usersController.login);
router.post('/login',usersController.ingresar);


//Vista de login & validacion por post
router.get('/registrar',usersController.registrar);
router.post('/registrar',usersController.processRegister);

module.exports = router;