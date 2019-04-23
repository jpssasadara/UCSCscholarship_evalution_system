const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var ifsController = require('./controllers/ifsController.js');

var app = express();
app.use(bodyParser.json());

app.listen(4000,() => console.log('Server started at port : 4000'));
app.use('/ifs',ifsController);