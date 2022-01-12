const express = require('express');
let app = express();

let midle = function(req, res, next){
    console.log('primero');
    console.log(req.path);
    next();
}

app.use(midle);
app.use(express.static('public'));
app.use(express.static('imagenes'));

app.get('/', (req, res) =>{
    res.status(200).send('Bienvenido')
});

app.get('/otraruta', (req, res) =>{
    res.status(200).send('Bienvenido a otraruta')
})

app.listen(3000, ()=>{
    console.log('APP escuchando el puerto 3000');
})