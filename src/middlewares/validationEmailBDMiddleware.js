const DB = require('../database/models');
const validationEmailBDMiddleware = function(req,res,next){
    DB.Users.findOne({where:{email: req.body.email}})
    .then((user)=>{
        if(user.email){
            return res.render('registro',{
                errors: {email:{msg: 'Email ya registrado'}},
                oldData: req.body
            });
        }
    })
    next();
}

module.exports = validationEmailBDMiddleware;