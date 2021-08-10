const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.get('/', (req,res)=>{
    
})
app.listen(3000, (req,res)=>{
    console.log('Server Arriba');
})
