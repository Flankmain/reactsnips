require('dotenv').config();

var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoAddress = process.env.MONGO_URL || "mongodb://localhost:27017/testdb";
startMongo(mongoAddress);

function startMongo(address){
    
    mongoose.connect
    (
        address,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true 
        }
    ).catch(error => console.log("Couldn't connect to MongoDB: " + error))

    const connection = mongoose.connection;

    connection.once("open", () => {
        console.log(`MongoDB started`);
    });
}

//route definitions
app.use('/user', require('./routes/user'));
app.use('/post', require('./routes/post'));

//const createExamples = require('./dbscripts/createExamples');
//createExamples()
//const port = process.env.PORT || 5000;
//app.listen(port, () => console.log(`Server  started: http://localhost:${port}`));

module.exports = app;