const fs = require('fs');
const path = require('path');
const DB = require('../database/models');
let productsArray = [];

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


const mainController = {
	index:		(req,res) =>{
		DB.Products.findAll().then((product)=>{
			product.map(producto=>{
				return productsArray.push(producto.dataValues);
			})
			return res.render('index',{producto:productsArray,toThousand});
		}).catch(e=>{
			console.error(e);
			res.send('Ups!! Ocurrio un error')})
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
