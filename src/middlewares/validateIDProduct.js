const DB = require('../database/models');
const validateIDProduct = function(req,res,next){
    DB.Products.findByPk(req.params.id,
        {association:'category_id'},
        {association: 'orderdetail'},
        {association: 'animal_id'})
    .then((producto)=>{
        if(!producto){
            res.redirect('/productos/crear');
        }   
    }).catch(error => { 
        console.log(error);
        return res.send('Opss!! ocurrio un error');});

    next();
}

module.exports = validateIDProduct;