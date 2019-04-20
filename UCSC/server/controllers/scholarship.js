const Scholarship = require('../models/scholarship');
const mongoose = require('mongoose');

exports.create_enrollment = (req, res, next) => {
    
    const scholarship = new Scholarship({
        _id: new mongoose.Types.ObjectId(),
        degree: req.body.degree,
        fullName: req.body.fullName,
        address: req.body.address,
        regNumber: req.body. regNumber,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        divisionGramasevaNiladhari: req.body.divisionGramasevaNiladhari,
        distance: req.body.distance,
        district: req.body.district
    });
    scholarship
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