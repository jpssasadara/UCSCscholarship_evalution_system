const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




const mongoConnection = "mongodb+srv://ucsc:ucsc@123@ucscmean-svqsr.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoConnection, {useNewUrlParser: true});



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Handling CORS error
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



// for handling invalied URLs------------>>FROM

app.use((req,res,next)=>{
    const error = new Error('Not found OOOH');
    error.status = 404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message:error.message
        }
    });
});
//------------------------------------------ TO

module.exports = app; 