const fs = require('fs');
const path = require('path');
const DB = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const productsController = {
    index: (req, res) => {
        products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
        res.render('productos', {
            products,
            toThousand
        });
    },
    detail: (req, res) => {
        let id = req.params.id;
		let product = products.find(product => product.id == id);
		console.log(product);
        res.render('detail',{
			product,
			toThousand
		});
    },
	create: (req,res) =>{
		res.render('crear');
	},
    storage: (req,res)=>{
        if(req.files){
            let newProduct = req.body;
            let productAdd = {
                ...newProduct,
                id: products[products.length-1].id + 1,
                image_p: req.files.image_p ? req.files.image_p[0].filename: 'default.png',
            }
            products.push(productAdd);
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
            res.redirect('/');
        }else{
            res.render('crear');
        }
    },
    delete: (req,res)=>{
        let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
        console.log(finalProducts);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
    },
    edit: (req,res)=>{
        let id = req.params.id;
        let productToEdit = products.find(product=> product.id == id);
        res.render('edicion',{productToEdit});
    },

    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product=> product.id == id);
        
        productToEdit = {
            id: productToEdit.id,
            image_p: req.file.filename,
            ...req.body
        };

        let newProducts = products.map(product => {
            if(product.id == productToEdit.id){
                return product = {...productToEdit}
            }
            return product
        });
   		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));

        res.redirect('/productos');

    }
    //------------CONTROLADOR--BASE--DE--DATOS----CRUD---------
    ,crear:(req,res)=>{
    },
    guardar:(req,res)=>{
        if(req.files){
            let productAdd = {
                p_name: req.body.name,
                category: req.body.category,
                p_description: req.body.description,
                caracteristic: req.body.caracteristic,
                specs: req.body.specs,
                price: req.body.price,
                animal: req.body.animal,
                category: req.body.category,
                image_p: req.files.image_p ? req.files.image_p[0].filename: 'default.png', 
            }
            DB.Products.create({...productAdd});
            return res.redirect('/');
        }else{
            return res.render('crear');
        }
    },
    editar:(req,res)=>{
         DB.Products.findByPk(req.params.id,
            {association:'category'},
            {association: 'orderdetail'},
            {association: 'animal'})
        .then((producto)=>{
            console.log('***************************');
            return res.render('edicion',{productToEdit:producto});
        }).catch();
    },
    eliminar:(req,res)=>{
        DB.Products.destroy(
            {where:{id:req.params.id}}
        )
        return res.redirect("/");
    },

    listar:(req,res)=>{
        DB.Products.findAll()
        .then((productos)=>{ 
           return res.render('productos',{productos:productos});
        //------Api
            // return res.status(200).json({
            //     total: productos.length,
            //     data: productos,
            //     status: 200
            }
        ).catch()
    },
    detallar:(req,res)=>{
        DB.Products.findByPk(req.params.id,
            {association:'category'},
            {association: 'orderdetail'},
            {association: 'animal'}
        )
        .then((producto)=>{
            return res.render('detail',{product:producto,toThousand});
        }).catch()
    },

    buscar:(req,res)=>{
        DB.Products
        .findAll({
            where: {
                p_name: { [Op.like]: '%'+req.query.keyword+'%'}
            }
        })
        .then(producto => {
            return res.redirect(`/productos/${producto.id}`)
        }).catch();
    }

}

module.exports = productsController;