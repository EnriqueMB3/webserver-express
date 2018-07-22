const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const hbs = require('hbs');
require('./helpers/helpers')


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); //Express HBS template engine



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ENrique',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}...`);
});