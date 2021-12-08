function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false;
    if(req.session.isOnLine){
        res.locals.isLogged = true;
    }
    next();
}

module.exports = userLoggedMiddleware;
