const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//BASES DE DATOS
const DB = require('../database/models');
const Op = DB.Sequelize.Op;

const usersController = {
    login:(req,res)=>{
        return res.render('login');
    },

    //log
    loginProcess: (req,res)=>{
        //logica de validacion de login
        let resultsValidations = validationResult(req);
        if((resultsValidations.errors.length > 0) ){
            console.log(resultsValidations);
            return res.render('login',{
                errors: resultsValidations.mapped(),
                oldData: req.body, 
               });
        }
        
        let userToLogin = User.findByField('email',req.body.email);
        if(userToLogin){
            let passwordCheck = bcrypt.compareSync(req.body.password,userToLogin.password);
            if(passwordCheck){
                delete userToLogin.password;
                req.session.userLogget = userToLogin;
                req.session.isOnLine = true;
                return res.redirect('/');
            }
            return res.render('login',{errors:{password:{msg:'Email o Contraseña incorrecta'}}});
        }
        return res.render('login',{errors:{email:{msg: 'No se encuentra el email '}}})
        
    },
    profile:(req,res)=>{
        console.log('Aqui en profile del Controler se logroooo');
        return res.render('usuarioPerfil',{
            user:req.session.userLogget
        })
    },
    logout:(req,res)=>{
        req.session.isOnLine = false;
        req.session.destroy();
        return res.redirect('/');
    },
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

        let userInDb = User.findByField('email',req.body.email);
        if(userInDb){
            console.log(resultsValidations);
            return res.render('registro',{
                errors: {email:{msg: 'Email ya registrado'}},
                oldData: req.body
            });

        }
    
        let userCreated = User.create(req.body,res);
        return res.redirect('/usuarios/login');
    },
//------------CONTROLADOR--BASE--DE--DATOS----CRUD---------
    crear:(req,res)=>{},
    editar:(req,res)=>{},
    detallar:(req,res)=>{},

//-----------------------------Endpoints API----------------------------
    //Método consulta todos los usuarios
    list: (req,res) => {
        DB.Users
        .findAll()
        .then(users => {
            return res.status(200).json({
                total: users.length,
                data: users,
                status: 200
            })
        })
    },
    //Método consulta un usuario
    show: (req, res) => {
        DB.Users
        .findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
                data: user,
                status: 200
            })
        })
    },
    //Método tipo POST para crear un usuario
    store: (req, res) => {
        DB.Users
        .create(req.body)
        .then(user => {
            return res.status(200).json({
                data: user,
                status: 200,
                created: 'ok'
            })
        })
    },
    //Método tipo Delete para eliminar un usuario
    delete: (req, res) => {
        DB.Users
        .destroy({
            where: {
                user_id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },
    //Método de búsqueda de usuario
    search: (req, res) => {
        DB.Users
        .findAll({
            where: {
                lastName: { [Op.like]: '%'+req.query.keyword+'%'}
            }
        })
        .then(users => {
            return res.status(200).json(users);
        })
    }
    //Método Patch para modificar

}

module.exports = usersController;