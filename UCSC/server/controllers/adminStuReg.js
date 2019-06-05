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


            //-------------------E MAIL SENDING PART ---------------------------------
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'fmsucscgroup5@gmail.com',
                    pass: 'fmsucscg5'
                }
            });

            var mailOptions = {
                from: 'fmsucscgroup5@gmail.com',
                to: regstu.email,
                subject: 'Exam Branch UCSC',
                text:

                    '###### UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING ###### \n' +

                    'Dear Student ... \n'
                    + 'Good Luck !!  your Application form of WELFARE AND DISTRESS FUND SCHOLARSHIP has been accepted. \nplease use \n Username-> ' +regstu.regNumber+
                    '\n Password-> ' +regstu.password+"\n link==> http://localhost:4200/login \n"+
                    'from UCSC Exam branch......'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            //----------------------------------------------------
        
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}


exports.get_password = (req, res, next) => {
    const regNumber1 = req.body.regNumber;
    registration.find({ regNumber: regNumber1 })
        .exec()
        .then(docs => {
            console.log(docs);
            const response = {
                students: docs.map(doc => {
                    return{
                        pass:doc.password
                    }  
                    
                })
            }
            res.status(200).json(response.students[0]);


        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

