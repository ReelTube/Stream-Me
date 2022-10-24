//Imports

const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
const db = require('./config/database');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require ('fs');
const { body, validationResult } = require('express-validator');

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

app.post('/signup',
    body('username')
    .isLength({ min: 5 })
    .withMessage('Username must be at least 5 characters'),
    // body('username').isRequired(),
    body('password').isLength({ min: 5 }),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('signup', {message:"Username has to be longer than 5 characters"});
        }

        let username = req.body.username;
        let password = req.body.password;
        sql = `INSERT INTO  users(user_name, password) VALUES("${username}", "${password}")`;

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