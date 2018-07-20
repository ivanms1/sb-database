require('dotenv').config();
const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const contact = require('./routes/contacts');
const user = require('./routes/users');

const port = process.env.PORT || 3001;

const app = express();
let db = null;

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
    db = process.env.MONGO_URI;
} else {
	db = process.env.MONGO_TEST;
}

mongoose
.connect(db,
{ useNewUrlParser:true })
.then(() => console.log('Connected to Mongo'))
.catch(err => console.log(err));

app.use('/user', user); 
app.use('/contact', contact);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;