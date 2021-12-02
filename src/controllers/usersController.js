const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
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
    registrar: (req,res)=>{
       return res.render('registro');
    },
    processRegister: (req,res)=>{
        //logica 
        let resultsValidations = validationResult(req);

        if(resultsValidations.errors.length > 0 ){
            console.log(resultsValidations);
            return res.render('registro',{errors: resultsValidations.mapped(), oldData: req.body});
        }
           // User.create(req.body);
           console.log(req.body.files);
            let userAdd = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                streetNumber: req.body.streetNumber,
                postalCode: req.body.postalCode,
                country: req.body.country,
                password: bcrypt.hashSync(req.body.password , 10),
                id: users[users.length-1].id + 1, //Quiza aqui se elimina el indice del array
                picture: req.body.picture ? req.body.picture.filename: 'profile-default.png',
            }
            users.push(userAdd);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            console.log('redirigiendo----------');
            res.redirect('/');
        //}else{
            console.log(req.body);
       // }
       // console.log(resultsValidations);


       //return res.send(resultsValidations);
       //He aqui como validar la contraseña
       //bcrypt.compareSync(password,resultadoHash); <-----------
      // return res.redirect('/');
    }


}

module.exports = usersController;