const express = require('express');
const router = express.Router();
const path = require('path');
const multer =  require('multer');
const usersController = require(path.join(__dirname,'../controllers/usersController.js'));
const {body} =  require('express-validator');
//Express-Validator
let validaciones = [
    //Retorna un Pseudo-array errors de objertos con el atributo msg
    body('email').notEmpty().withMessage('Ingresa un correo').bail().isEmail().withMessage('Inserta un email valido'),
    body('firstName').notEmpty().withMessage('Inserta un nombre'), //Agregar validacionnes
    body('lastName').notEmpty().withMessage('Inserta un nombre'),
    body('password').notEmpty().withMessage('Introduce una contraseña'),//.bail().isStrongPassword().withMessage('El password debera incluir 8 caracteres con Mayusculas minusculas y caracteres alfanumericos'),
    body('phone').notEmpty().withMessage('Introduce tu numero'),//.bail().isNumeric().withMessage('Ingresa un numero valido'),
    body('streetNumber').notEmpty().withMessage('No puedes dejar el campo vacio'),
    body('postalCode').notEmpty().withMessage('Ingresa un CP'),
    body('country').notEmpty().withMessage('No puedes dejar el campo vacio')
];

//Se configura multer
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../public/images/users'));
    },
    filename: (req,file,cb)=> {
        let filename = `img_${Date.now()}${path.extname(file.originalname)}`;
        cb(null,filename);
    }
})
//Se declara el midleWare
const uploadFile = multer({storage});

//Vista de login & validacion por post
router.get('/login',usersController.login);
router.post('/login',usersController.ingresar);


//Vista de login & validacion por post
router.get('/registrar',usersController.registrar);
router.post('/registrar',uploadFile.single('picture'),validaciones,usersController.processRegister);

module.exports = router;