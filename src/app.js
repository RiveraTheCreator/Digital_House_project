const express = require('express');
const app = express();
const path = require('path');

//Declaracion de manejadores de las rutas
const rutaCarrito = require('./routes/carrito.js');
const rutaIndex = require('./routes/index.js');
const rutaRegistro = require('./routes/registro.js');
const rutaDetalle = require('./routes/detalle.js');
const rutaLogin = require('./routes/login.js');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Declaración de uso de EJS
app.set("view engine","ejs");
//Montar el servidor
app.listen(3000, ()=>{console.log('Server Arriba');});
//Derivación a manejadores de rutas

app.use('/', rutaIndex);
app.use('/carrito', rutaCarrito);
app.use('/registro', rutaRegistro);
app.use('/detalle', rutaDetalle);
app.use('/login',rutaLogin);
