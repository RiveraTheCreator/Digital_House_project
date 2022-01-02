const {validationResult} = require('express-validator');
const validationErrLogin = function(req,res,next){
    let resultsValidations = validationResult(req);
    if((resultsValidations.errors.length > 0) ){
        console.log(resultsValidations);
        return res.render('login',{
            errors: resultsValidations.mapped(),
            oldData: req.body, 
           });
    }

    next();
}

module.exports = validationErrLogin;
