const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const contact = require('./routes/contacts');
const port = process.env.ENV || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('tiny'));

mongoose
.connect('mongodb://ivanms1:Keyboardxp10!@ds241530.mlab.com:41530/ivan',
{ useNewUrlParser:true })
.then(() => console.log('Connected to Mongo'))
.catch(err => console.log(err));

app.use('/contact', contact); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});