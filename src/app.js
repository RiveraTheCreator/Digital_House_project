const express = require('express');
const app = express();
const path = require('path');

//Declaracion de manejadores de las rutas
const mainRoutes = require('./routes/mainRoutes.js');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Declaración de uso de EJS
//app.set('views',path.join(__dirname, './views'));
app.set("view engine","ejs");

//Derivación a manejadores de rutas
app.use('/',mainRoutes);

//Montar el servidor
app.listen(3000, ()=>{console.log('Server Arriba');});
