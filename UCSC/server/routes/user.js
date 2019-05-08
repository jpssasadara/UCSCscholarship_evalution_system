const User = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");


router.post("/login", (req, res, next) => {
    let loggedUser;
    let send = 0;
    //console.log(req);
    //req = JSON.parse(req);
    //console.log(req.body);
    User.findOne({
            email: req.body.email
        }).then(user => {
            if (!user) {
                send = 1;
                return res.status(200).json({
                    message: 0
                });
            }
            loggedUser = user;
            // console.log(crypto.createHash('md5').update(req.body.password).digest('hex') == loggedUser.password);
            return crypto.createHash('md5').update(req.body.password).digest('hex') == loggedUser.password;

            //return bcrypt.compare(req.body.password, user.password)
        })
        .then(result => {
            if (send == 0 && !result) {
                return res.status(200).json({
                    userId: "",
                    role: "",
                    token: ""
                });
            }
            const token = jwt.sign({

                userId: (loggedUser._id + Date())
            }, "Customer Secret key", {
                expiresIn: "1h"
            });
            // console.log(token);
            res.status(200).json({
                userId: loggedUser._id,
                role: loggedUser.role,
                token: token,
                email: loggedUser.email
            });
        })
        .catch(err => {
            if (send == 0) {
                return res.status(200).json({
                    userId: "",
                    role: "",
                    token: "",
                    email: ""
                });
            }
        });

});


module.exports = router;