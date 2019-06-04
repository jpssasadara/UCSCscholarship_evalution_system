const registration = require('../models/adminStuReg');
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');

exports.create_registration = (req, res, next) => {

    const regstu = new registration({
        _id: new mongoose.Types.ObjectId(),
        regNumber: req.body.regNumber,
        email: req.body.email,
        password: req.body.password
    });
    regstu 
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                massage: 'Handling post request ',
                createdproduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}

