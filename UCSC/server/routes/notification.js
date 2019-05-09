const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/sendNotification", (req, res, next) => {
    const msg = req.body.msg;
    const emailArr = JSON.parse(req.body.emailArr);
    console.log(emailArr);
    let i = 0;
    let j = emailArr.length;
    for (i = 0; i < j; i++) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'duleepalwis0@gmail.com',
                pass: 'duleep3alwis'
            }
        });

        let mailOptions = {
            from: "UCSC",
            to: emailArr[i],
            subject: 'Regarding scholarship',
            text: msg
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                j = j - 1;
                console.log('Email sent: ' + info.response);
            }
        });
    }

    setTimeout(() => {
        if (j == 0) {
            console.log(132);
            res.status(200).json({
                message: 1
            });
        } else {
            console.log(132);

            res.status(200).json({
                message: 0
            });
        }
    }, 13000);

});


module.exports = router;