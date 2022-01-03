const {validationResult} = require('express-validator');
const modelProduct = require('../Models/Products');
const validationErrLogin = function(req,res,next){
    let resultsValidations = validationResult(req);
    let productoActual = modelProduct.sendProduct();
    
    if((resultsValidations.errors.length > 0) ){
        return res.render('edicion',{
            errors: resultsValidations.mapped(),
            oldData: req.body,
            productToEdit: productoActual
           });
    }

    next();
}

module.exports = validationErrLogin;
