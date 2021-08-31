const mainController = {
	index:		(req,res) =>{
		return res.render('index');
	},
	carrito:	(req,res) =>{
		return res.render('carrito');
	},
	detalle:	(req,res) =>{
		return res.render('detalle');
	},
	login:		(req,res) =>{
		return res.render('login');
	},
	registro:	(req,res) =>{
		return res.render('registro');
	},
	edicion:	(req,res) =>{
		return res.render('edicion');
	}
};

module.exports = mainController;
