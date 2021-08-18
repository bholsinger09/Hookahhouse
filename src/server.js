const express = require("express");

const mysql = require("mysql");

const db =  mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'D5q%9tY5jfiW',
    database:'hookahsite'
})

const app = express();

app.post(('/create'), (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const question = req.body.question;

    db.query("INSERT INTO cust_questions (name, email, question) VALUES (?,?,?)",
    [name, email, question], (err,result)=> {
        if (err) {
            console.log(err)
        }else {
            res.send('data sent')
        }
    }
    );
} );

app.get('/', (req,res) => res.send('This is a get request'));

app.listen(8000, ()=> console.log(' Listening on port 8000'));