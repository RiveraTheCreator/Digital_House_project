const usersController = {
    login:(req,res)=>{
        return res.render('login');
    },

    ingresar: (req,res)=>{
        //logica de validacion de login
        
        
        res.redirect('/');
    },
    registrar: (req,res)=>{
       return res.render('registro');
    },
    processRegister: (req,res)=>{
        //logica 
        res.redirect('/');
    }


}
module.exports = usersController;