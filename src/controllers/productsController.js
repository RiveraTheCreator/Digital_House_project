const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const productsController = {
    index: (req, res) => {
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
                image_1: req.files.image_1 ? req.files.image_1[0].filename: 'default.png',
                image_2: req.files.image_2 ? req.files.image_2[0].filename: 'default.png',
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
            ...req.body,
            image: productToEdit.image_p
        };

        let newProducts = products.map(product => {
            if(product.id == productToEdit.id){
                return product = {...productToEdit}
            }
            return product
        });
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));

        res.redirect('/');


    }
}

module.exports = productsController;