function guestMiddleware(req,res,next){
    if(req.session.userLogget){
        console.log('-------------redirigiendo---del--login------');
        return res.redirect('/');
    }
    next();
}
module.exports =guestMiddleware;