const express = require('express');
const router = express.Router();
const path = require('path');
const multer =  require('multer');
const model = require('../models/Users');
const usersController = require(path.join(__dirname,'../controllers/usersController.js'));
const {body} =  require('express-validator');

//Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Validacion de registro con Express-Validator
let validaciones = [
    body('email').notEmpty().withMessage('Ingresa un correo').bail().isEmail().withMessage('Inserta un email valido'),
    body('firstName').notEmpty().withMessage('Inserta un nombre').bail().isLength({min:2,max:undefined}).withMessage('Introduce un nombre valido'), 
    body('lastName').notEmpty().withMessage('Inserta un nombre').bail().isLength({min:2,max:undefined}).withMessage('Introduce un nombre valido'),
    body('password').notEmpty().withMessage('Introduce una contraseña').bail().isLength({min:8,max:undefined}),
    body('phone').notEmpty().withMessage('Introduce tu numero'),//.bail().isNumeric().withMessage('Ingresa un numero valido'),
    body('streetNumber').notEmpty().withMessage('No puedes dejar el campo vacio'),
    body('postalCode').notEmpty().withMessage('Ingresa un CP'),
    body('country').notEmpty().withMessage('No puedes dejar el campo vacio'),
    body('confirmPass').notEmpty().withMessage('Llenar ambos campos')
];
//validacion de login
let validacionesLogin = [
    body('email').notEmpty().withMessage('Ingresa un correo').bail().isEmail().withMessage('Inserta un email valido'),
    body('password').notEmpty().withMessage('Llenar campo')
]

//Se configura multer
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../public/images/users'));
    },
    filename: (req,file,cb)=> {
        let fileName = `img_${Date.now()}${path.extname(file.originalname)}`;
        cb(null,fileName);
        file?model.catchName(fileName):undefined;
    }
})
new Error('Only image files are allowed!')
//image filter
const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb('Inserta una imagen en formato jpg|jpeg|png|gif ', false);
    }
    cb(null, true);
};
//Se declaran los midleWares
const uploadFile = multer({storage, fileFilter:imageFilter});
const validateEmail = require('../middlewares/validationEmailBDMiddleware');
const validateErrors = require('../middlewares/validationMiddleware');
const validateLogin = require('../middlewares/validationErrLogin');
const { route } = require('express/lib/application');


//Vista de registrar y validacion por post
router.get('/registrar',guestMiddleware,usersController.registrar);
router.post('/registrar',uploadFile.single('picture'),validaciones,validateErrors,validateEmail,usersController.crear);


//Vista de login & validacion por post
router.get('/login',guestMiddleware,usersController.login);
router.post('/login',validacionesLogin,validateLogin,usersController.logear);

//Logout
router.get('/logout',usersController.logout)

//Perfil de usuario
router.get('/usuarioPerfil',authMiddleware,usersController.detallar);
router.get('/edit',authMiddleware,usersController.edit);
router.post('/edit',usersController.editar);

//-------------------Prueba API--------------------
router.get('/', usersController.list);
router.get('/:id', usersController.show);
router.get('/search', usersController.search)
router.post('/', usersController.store);
router.delete('/:id', usersController.delete);

module.exports = router;