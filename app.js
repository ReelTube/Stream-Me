//Imports

const express = require('express');
// const expressLayouts = require('express-ejs-layouts')
const db = require('./config/database');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const videoStorage = multer.diskStorage({
     destination: 'videos', // Destination to store video 
     filename: (req, file, cb) => {
         cb(null, file.fieldname + '_' + Date.now() 
          + path.extname(file.originalname))
     }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
})




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
    let upload = req.body.uploaded;
    let sql = `INSERT INTO videos(name, description, uploaded_address, user_id, uploaded_time) VALUES("${title}", "${description}","${upload}", 1, NOW())`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/video', (req, res) =>{
    res.render('upload-test');
});

app.post('/video', videoUpload.single('video'), (req, res) =>{
    res.redirect('/video');
})


app.listen(3000, () => {
    console.log(`listening from port: ${port}!`);
});