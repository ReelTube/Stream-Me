INSTAPIC

database.js

const mysql = require('mysql2');

 const con = mysql.createConnection({
    host:'localhost',
    user:'',
    password:'',
    database:''
 });

con.connect(async(err) => {
    if(err) throw err;
    console.log('Database connected!');
    // con.query('SELECT * FROM users', (err, results) => {
    //     if(err) throw err;
    //     console.log(results);
    // });
});

module.exports = con;
