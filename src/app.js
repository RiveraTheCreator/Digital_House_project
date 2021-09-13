const express = require('express');
const app = express();
const path = require('path');

//Declaracion de manejadores de las rutas
const mainRoutes = require('./routes/main.js');
const productsRoutes = requre('./routes/productos.js')

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Declaración de uso de EJS
app.set("view engine","ejs");

//Derivación a manejadores de rutas
app.use('/', mainRoutes);
app.use('/productos', productsRoutes);
//Error 404
app.use((req,res,next)=>{
    res.status(404).send('ERROR 404 Ruta no encontrada');
})
//Montar el servidor
app.listen(3000, ()=>{console.log('Server Arriba');});