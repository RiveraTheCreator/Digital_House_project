const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const multer = require('multer');
const path = require('path');
const {body} =  require('express-validator');
//Middlewares
const validateId = require('../middlewares/validateIDProduct');
const validateCreateProduct = require('../middlewares/validateCreateProduct');
const validateUpdateProduct = require('../middlewares/validateUpdateProduct');

//Configuracion de multer
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{cb(null,path.join(__dirname,'../public/images/products'));},
    filename: (req,file,cb)=>{
        let newFileName = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})
//image filter
const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
const uploadFile = multer({storage:storage,fileFilter:imageFilter});
//Validaciones

    const validaciones = [
        body('name').isLength({min:5,max:undefined}).withMessage('Introduce un nombre valido'),
        body('description').isLength({min:20,max:undefined}).withMessage('Introduce mas de 20 caracteres'),
    ]


//Crear producto
/*2*/router.get('/crear', productsController.create);
/*4*/router.post('/',uploadFile.fields([{name:'image_p'}]),validaciones,validateCreateProduct,productsController.guardar);

//Eliminar producto
/*7*/router.delete('/:id',productsController.eliminar);

// *** Genera la vista para mostrar todos los productos ***
/*1*/router.get('/', productsController.listar);

//Obtener un producto... No debes confundir con crear un producto
/*3*/router.get('/:id',validateId, productsController.detallar);

//Editar producto
/*5*/router.get('/edit/:id',validateId ,productsController.editar);
/*6*/router.patch('/edit/:id', uploadFile.single('image_p'),validaciones,validateUpdateProduct,productsController.actualizar);

module.exports = router;