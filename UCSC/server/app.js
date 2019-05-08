const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const scholarshipRoutes = require('./routes/scholarship');
const userRoute = require('./routes/user');
const applicantRoute = require('./routes/applicants');



const mongoConnection = "mongodb+srv://ucsc:ucsc@123@ucscmean-svqsr.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoConnection, { useNewUrlParser: true });



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handling CORS error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
    next();
});


<<<<<<< HEAD
app.use('/scholarship', scholarshipRoutes);
app.use('/api/user', userRoute);
app.use('/api/applicants', applicantRoute);

// for handling invalied URLs------------>>FROM
=======
app.use('/scholarship',scholarshipRoutes);

// for handling invalied URLs------------>>FROM scholarship/getWelfareStu'
>>>>>>> 99b4c329951a843ab31951ea968699c307d0eff8

app.use((req, res, next) => {
    const error = new Error('Not found OOOH');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
//------------------------------------------ TO
console.log("Hi Server is running ");


module.exports = app;