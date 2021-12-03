const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {
    login:(req,res)=>{
        return res.render('login');
    },

    ingresar: (req,res)=>{
        //logica de validacion de login
        
        res.redirect('/');
    },
           //He aqui como validar la contraseña
       //bcrypt.compareSync(password,resultadoHash); <-----------
    //-----------------C-O-M-P-L-E-T-E------------------------------------
    registrar: (req,res)=>{
       return res.render('registro');
    },
    processRegister: (req,res)=>{
        let resultsValidations = validationResult(req);

        if((resultsValidations.errors.length > 0) ||  (req.body.password !== req.body.confirmPass) ){
            console.log(resultsValidations);
            return res.render('registro',{
                errors: resultsValidations.mapped(),
                oldData: req.body, 
                passValidate: req.body.password !== req.body.confirmPass?'Las contraseñas no coinciden':undefined});
        }
         User.create(req.body,res);
    }
}

module.exports = usersController;