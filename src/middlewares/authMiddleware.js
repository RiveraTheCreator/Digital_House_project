function authMiddleware(req,res,next){
    console.log();
    if(!req.session.userLogged){
        return res.redirect('/usuarios/login');
    }
    next();
}

module.exports = authMiddleware;