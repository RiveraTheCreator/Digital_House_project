const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//Declaración de uso de EJS
app.set("view engine","ejs");

app.listen(3000, ()=>{
    console.log('Server Arriba');
});

app.get('/', (req,res)=>{
	let htmlPath = path.resolve(__dirname,'./views/index.html');
	res.sendFile(htmlPath);
});

app.get('/carrito', (req,res)=>{
	let htmlPath = path.resolve(__dirname,'./views/carrito.html');
	res.sendFile(htmlPath);
});

app.get('/detalle', (req,res)=>{
	let htmlPath = path.resolve(__dirname,'./views/detalle.html');
	res.sendFile(htmlPath);
});

app.get('/login', (req,res)=>{
	let htmlPath = path.resolve(__dirname,'./views/login.html');
	res.sendFile(htmlPath);
});

app.get('/registro', (req,res)=>{
	let htmlPath = path.resolve(__dirname,'./views/registro.html');
	res.sendFile(htmlPath);
});
