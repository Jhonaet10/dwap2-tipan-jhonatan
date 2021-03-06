
const express = require('express');
const app = express();
 
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //Middleword

// Express HBS view engine.
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});
 
app.listen(port, ()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`);
});