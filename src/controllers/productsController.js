const fs = require('fs');
const path = require('path');
const DB = require('../database/models');
const modelProduct = require('../Models/Products');
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

    },
    //------------CONTROLADOR--BASE--DE--DATOS----CRUD---------
    
    guardar:(req,res)=>{
        let filename = undefined;
        if(req.files){
           // console.log(req.files);
            let productAdd = {
                p_name: req.body.name,
                category: req.body.category,
                p_description: req.body.description,
                caracteristic: req.body.caracteristic,
                specs: req.body.specs,
                price: req.body.price,
                animal: req.body.animal,
                category: req.body.category,
                animal_id: req.body.animal,
                category_id: req.body.category,
                image_p: req.files.image_p ? req.files.image_p[0].filename: 'default.png', 
            }
            console.log(req.body);
            DB.Products.create({...productAdd});
            return res.redirect('/productos/');
        }else{
            return res.render('crear');
        }
    },
    editar:(req,res)=>{
         DB.Products.findByPk(req.params.id,
            {association:'category_id'},
            {association: 'orderdetail'},
            {association: 'animal_id'})
        .then((producto)=>{
            modelProduct.catchProduct(producto);
            console.log(`\n\n${producto}\n\n`);
            return res.render('edicion',{productToEdit:producto});
        }).catch(error => { 
            console.log(error);
            return res.send('Opss!! ocurrio un error');});
    },
    actualizar:(req,res)=>{
        let productAdd = {
            p_name: req.body.name,
            category: req.body.category,
            p_description: req.body.description,
            caracteristic: req.body.caracteristic,
            specs: req.body.specs,
            price: req.body.price,
            animal: req.body.animal,
            }
        DB.Products.update({...productAdd},{where: {product_id:req.params.id}});
        return res.redirect(`/productos/${req.params.id}`);
    },
    eliminar:(req,res)=>{
        DB.Products.destroy(
            {where:{product_id:req.params.id}}
        )
        return res.redirect("/");
    },

    listar:(req,res)=>{
        DB.Products.findAll()
        .then((productos)=>{ 
           return res.render('productos',{products:productos,toThousand});

            }
        ).catch(err=>console.error(err))
    },
    detallar:(req,res)=>{
        DB.Products.findByPk(req.params.id,
            {association:'category'},
            {association: 'orderdetail'},
            {association: 'animal'}
        )
        .then((producto)=>{
            return res.render('detail',{product:producto,toThousand});
        }).catch(error=>console.log(console.log(error)))
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