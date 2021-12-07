function guestMiddleware(req,res,next){
    if(req.session.userLogget){
        console.log('------------------redirigiendo------');
        console.log(req.session.userLogget);
        return res.redirect('/usuarios/usuarioPerfil');
    }
    next();
}
module.exports =guestMiddleware;