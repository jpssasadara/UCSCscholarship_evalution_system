const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var ifsController = require('./controllers/ifsController.js');
var crieteriaController = require('./controllers/crieteriaController.js');
var app = express();
app.use(bodyParser.json());

app.listen(4000,() => console.log('Server started at port : 4000'));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
    next();
});

app.use('/ifs',ifsController);
app.use('/crieteria',crieteriaController);