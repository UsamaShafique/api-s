const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const signupROUTE = require('./routes/signupRoute');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const port = 3000;

mongoose.connect (process.env.CONNstring, ()=>{
    console.log("DB is Connected!")
});

app.use('/signup', signupROUTE);
app.use('/', signupROUTE);

app.get('/', (req, res)=>{
    res.send("Homepage");
});

app.listen(port);