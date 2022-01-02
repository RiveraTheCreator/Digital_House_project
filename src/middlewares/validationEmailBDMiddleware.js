const DB = require('../database/models');

const validationEmailBDMiddleware = function(req,res,next){
     DB.Users.findOne({where:{email: req.body.email}})
    .then((user)=>{
        console.log('\n\n');
        console.log(user.dataValues.email);
        console.log('\n\n');

        if(user.dataValues.email){
            //console.log('***********************');
             res.render('registro',{
                errors: {email:{msg: 'Email ya registrado'}},
                oldData: req.body
            });
        }
    }).catch(error=>console.error(error));

    next();
}

module.exports = validationEmailBDMiddleware;