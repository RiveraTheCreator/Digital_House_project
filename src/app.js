const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
//Declaracion de manejadores de las rutas
const mainRoutes = require('./routes/main.js');
const productsRoutes = require('./routes/products.js');
const usersRoutes = require('./routes/users.js');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Declaración de uso de EJS
app.set("view engine","ejs");
//MiddleWares
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Derivación a manejadores de rutas
app.use('/', mainRoutes);
app.use('/productos', productsRoutes);
app.use('/usuarios',usersRoutes);
//Error 404
app.use((req,res,next)=>{
    res.status(404).send('ERROR 404 Ruta no encontrada');
    next();
})
//Montar el servidor
app.listen(3000, ()=>{console.log('Server Arriba');});