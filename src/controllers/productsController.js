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
		let product = products.find(product=> product.id == id)
		res.render('detail',{
			product,
			toThousand
		});
    },
	crear: (req,res) =>{
		res.render('crear');
	},
    procesar: (req,res)=>{
        let newProduct = req.body;
        let productAdd = {
            ...newProduct,
            id: products[products.length-1].id + 1,
        }
        products.push(productAdd);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');

    }
}

module.exports = productsController;