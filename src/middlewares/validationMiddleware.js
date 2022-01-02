const {validationResult} = require('express-validator');
const DB = require('../database/models');

const validationMiddleware = function(req,res,next){
    let resultsValidations = validationResult(req);
    if((resultsValidations.errors.length > 0) ||  (req.body.password !== req.body.confirmPass)){
        return res.render('registro',{
            errors: resultsValidations.mapped(),
            oldData: req.body, 
            passValidate: req.body.password !== req.body.confirmPass?'Las contraseñas no coinciden':undefined});
    }

    next();
}

module.exports = validationMiddleware;