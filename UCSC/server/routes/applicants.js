const scholar = require("../models/scholarship");
const express = require('express');
const router = express.Router();

router.post("/getAll", (req, res, next) => {
    const batch = req.body.batch;
    scholar.find({ batch: batch }, (err, result) => {
        let message = 0;
        if (result) {
            message = 1;
        }
        res.status(200).json({
            message: message,
            result: result
        });
    });
});

router.post("/getSelectedApplicants", (req, res, next) => {
    const batch = req.body.batch;
    scholar.find({ batch: batch, selected: true }, (err, result) => {
        let message = 0;
        if (result) {
            message = 1;
        }
        res.status(200).json({
            message: message,
            result: result
        });
    });
});

router.post("/getApplicant", (req, res, next) => {
    const id = req.body.id;
    scholar.findById({ _id: id }, (err, result) => {
        let message = 0;
        if (result) {
            message = 1;
        }
        res.status(200).json({
            message: message,
            result: result
        });
    });
});

router.post("/saveSelectedApplicants", (req, res, next) => {
    //console.log(req.body);
    const applicants = JSON.parse(req.body.applicantsArr);
    // console.log(typeof(applicants));
    // console.log(applicants + " " + req.body.applicantsArr);
    let i = applicants.length;
    let j = 0;
    for (j = 0; j < i; j++) {
        //  console.log(applicants[j]);
        scholar.updateOne({ _id: applicants[j] }, { selected: true }, (err, result) => {
            if (err) {
                return res.status(200).json({
                    message: 1
                });
            } else {
                console.log(result);
                i = i - 1;
            }
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

module.exports = router;