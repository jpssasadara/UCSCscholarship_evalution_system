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

module.exports = router;