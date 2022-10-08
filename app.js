//Imports

const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
const db = require('./config/database');


const port = 3000;


const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));


// app.use(expressLayouts);
app.set('views', './views/layouts');
// app.set('layout', './layouts')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {title: 'ReelTube'});
});


app.listen(3000, () => {
    console.log(`listening from port: ${port}!`);
});