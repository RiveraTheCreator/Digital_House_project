function authMiddleware(req,res,next){
    console.log('-------AUTENTICANDO--------');
    let statusUser =  req.session.isOnLine;
    console.log(!statusUser );
    if(!statusUser){
        return res.redirect('/usuarios/login');
    }
    next();
}

module.exports = authMiddleware;