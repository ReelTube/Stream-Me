//Imports

const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
const db = require('./config/database');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require ('fs');
const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');
const passwordValidator = require('password-validator');

const videoStorage = multer.diskStorage({
     destination: './public/images', // Destination to store video 
     filename: (req, file, cb) => {
         cb(null, file.fieldname + '_' + Date.now() 
          + path.extname(file.originalname));
          console.log(file);
     },
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(jpeg|png)$/)) { 
         return cb(new Error('Please upload an image'))
      }
      cb(undefined, true)
   }
})

const port = 3000;


const app = express();
const ejs = require('ejs');
const con = require('./config/database');
const { userInfo } = require('os');


app.use(express.static('public'));

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

const schema = new passwordValidator();
schema 
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(2)
    .has().not().spaces()
    .is().not().oneOf(['Passw0rd', 'Password123']);


app.post('/signup',
    body('username')
    .isLength({ min: 5 }),
    body('password')
    .isLength({ min: 10}),
    (req, res) => {

        let username = req.body.username;
        let password = req.body.password;
        sql = `INSERT INTO  users(user_name, password) VALUES("${username}", "${password}")`;

        let message = "";
        let error = "";
        

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(schema.validate('Dominicano1'));
            if(username.length < 5){
                message = "Username must be 5 characters long";
                
            }

            if(schema.validate(password) == false){
                console.log(schema.validate(password));

            }

            if(password.length < 10){
                error ="Password must be at least 10 characters, contain a number and a special character";
            }
            return res.render('signup', {message: message, error}); 
            
        }


        db.query(sql, (err, result) => {
            if(err) throw err;
            res.redirect('/signin');
        })

})

app.get('/upload', (req, res, next) => {
    res.render('video-upload-form');
});

app.post('/upload', videoUpload.single('video'),(req, res, next) => {
    let title = req.body.title;
    let description = req.body.description;
    let video = req.body.video;
    let sql = `INSERT INTO videos(name, description, uploaded_address, user_id, uploaded_time) VALUES("${title}", "${description}","/home/will/Documents/ReelTube/public/videos/${req.file.filename}", 1, NOW())`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/upload');
    });
});


app.listen(3000, () => {
    console.log(`listening from port: ${port}!`);
});