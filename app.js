//Imports

const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
const db = require('./config/database');
const bodyParser = require('body-parser');


const port = 3000;


const app = express();
const ejs = require('ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));


// app.use(expressLayouts);
app.set('views', './views/layouts');
// app.set('layout', './layouts')
app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('home', {title: 'ReelTube'});
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/upload', (req, res, next) => {
    res.render('video-upload-form');
});

app.post('/upload',(req, res, next) => {
    let title = req.body.title;
    let description = req.body.description;
    // let upload = req.body.uploaded;
    let sql = `INSERT INTO videos(name,description, user_id) VALUES("${title}", "${description}", 1)`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});


app.listen(3000, () => {
    console.log(`listening from port: ${port}!`);
});