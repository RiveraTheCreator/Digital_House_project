const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const multer = require('multer');
const path = require('path');

//Configuracion de multer
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{cb(null,path.join(__dirname,'../public/images/products'));},
    filename: (req,file,cb)=>{
        let newFileName = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})
const uploadFile = multer({storage:storage});
//RUTAS DETALLE 
router.get('/', productsController.index);
router.get('/detalle/:id', productsController.detail);
//Crear producto
router.get('/crear/', productsController.create);
router.post('/',uploadFile.fields([{name:'image_p'},{name:'image_1'},{name:'image_2'}]),productsController.storage);
// *** Genera la vista para mostrar todos los productos ***
router.get('/', productsController.index);
router.get('/detalle/:id', productsController.detail);
//Obtener un producto... No debes confundir con crear un producto
router.get('/:id', productsController.detail);

module.exports = router;