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

//Crear producto
/*2*/router.get('/crear', productsController.create);
/*4*/router.post('/',uploadFile.fields([{name:'image_p'}]),productsController.guardar);

//Eliminar producto
/*7*/router.delete('/:id',productsController.eliminar);

// *** Genera la vista para mostrar todos los productos ***
/*1*/router.get('/', productsController.listar);

//Obtener un producto... No debes confundir con crear un producto
/*3*/router.get('/:id', productsController.detallar);

//Editar producto
/*5*/router.get('/edit/:id', productsController.editar);
/*6*/router.patch('/edit/:id', uploadFile.single('image_p'), productsController.actualizar);//si no va .storage cámbienlo xdxd

module.exports = router;