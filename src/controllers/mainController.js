const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


const mainController = {
	index:		(req,res) =>{
		return res.render('index',{producto:products,toThousand});
	},
	carrito:	(req,res) =>{
		return res.render('carrito');
	},
	detalle:	(req,res) =>{
		return res.render('detail'); 
	},
	login:		(req,res) =>{
		return res.render('login');
	},
	registro:	(req,res) =>{
		return res.render('registro');
	},
	edicion: (req,res) =>{
		return res.render('edicion');
	}
};

module.exports = mainController;
