const express = require('express');
const cookieSession = require('cookie-session');
let app = express();

app.use(cookieSession({
    name:'session',
    secret:'contraseña',
}));
app.use(express.urlencoded());
app.set('views', './vistas');
app.set('view engine', 'pug');

app.post('/todo/add', (req, res)=>{
    let a = [];
    a.push(req.body.elemento);
    if(req.session.items != undefined){
        req.session.items.push(req.body.elemento);
    }else{
        req.session.items = a;
    }
    res.redirect(301,'/todo');
    res.end();
})

app.get('/todo', (req, res)=>{
    console.log(req.session.items)
    res.render('list',{
        items: req.session.items,
        pretty:true
    })
    res.end()
});

app.get('/todo/delete/:id', (req, res)=>{
    let ele = req.params.id;
    req.session.items = req.session.items.filter(e=>{
        return e != ele;
    });
    console.log(req.session.items);
    res.end();
});



app.listen(8000, ()=>{
    console.log('Servidor on')
});