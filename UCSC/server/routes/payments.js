const mongoose = require("mongoose");
const payments = require("../models/paymentStudent");
const express = require('express');
const router = express.Router();


router.post("/savePayment", (req, res, next) => {
    const paymentDetails = JSON.parse(req.body.idArr);
    let i = paymentDetails.length;
    let j = 0;
    for (j = 0; j < i; j++) {
        const paymentObj = new payments({
            date: req.body.date,
            // time: req.body.time,
            amount: req.body.amount,
            term: req.body.term,
            applicant: paymentDetails[j]
        });
        //console.log(paymentObj);
        paymentObj.save()
            .then(result => {
                i = i - 1;
                console.log(i);
            })
            .catch(result => {
                console.log(result);
            });
    }

    setTimeout(() => {
        if (i == 0) {
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


router.post("/getApplicantPayments", (req, res, next) => {
    //console.log(req.body.id)
    const idApplicant = mongoose.Types.ObjectId(req.body.id);
    // const idApplicant = ObjectId(req.body.id);
    // console.log(idApplicant);

    payments.find({ applicant: idApplicant }, (err, result) => {
        let message = 0;
        if (err) {
            console.log(err);
        }

        if (result) {
            message = 1;
        }

        res.status(200).json({
            message: message,
            result: result
        });
    });
});

router.post("/removePayment", (req, res, next) => {
    //console.log(req.body.id)

    // const idApplicant = ObjectId(req.body.id);
    // console.log(idApplicant);

    payments.deleteOne({ _id: req.body.id }, (err, result) => {
        let message = 0;
        if (err) {
            console.log(err);
        }

        if (result) {
            message = 1;
        }

        res.status(200).json({
            message: message,
            result: result
        });
    });
});

module.exports = router;