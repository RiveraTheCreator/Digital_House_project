function authMiddleware(req,res,next){
    console.log('-------AUTENTICANDO--------');
    let statusUser =  req.session.onLine;
    console.log(!statusUser );
    if(!statusUser){
        return res.redirect('/usuarios/login');
    }
    next();
}

module.exports = authMiddleware;